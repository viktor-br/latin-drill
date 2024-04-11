import { GetTopicCardByKeys } from '../topics';
import React, { useEffect, useState } from 'react';
import { GrammarChartData } from '../types/GrammarChart';
import { Table } from 'react-bootstrap';

interface HelpTable {
  name: string;
  data: HelpTableData;
}

type HelpTableRow = string[];

interface HelpTableData {
  rowHeaders: string[];
  columnHeaders: string[];
  rows: HelpTableRow[];
}

const countDepth = (grammarChartData: GrammarChartData | string, level: number): number => {
  if (typeof grammarChartData === 'string') {
    return level;
  }

  return countDepth(grammarChartData[Object.keys(grammarChartData)[0]], level + 1);
};

function createGrammarChartTable(grammarChartData: GrammarChartData): HelpTableData {
  const rowHeaderKeys: { [key: string]: number } = {};
  const rowHeaders: string[] = [];
  const rows: string[][] = [];
  const columnHeaders: string[] = [];

  for (const key in grammarChartData) {
    columnHeaders.push(key);
    const value: GrammarChartData | string = grammarChartData[key];
    if (typeof value === 'string') {
      throw new Error('Unexpected depth');
    }
    for (const k in value) {
      if (!(k in rowHeaderKeys)) {
        rows.push([]);
        rowHeaderKeys[k] = rowHeaders.length;
        rowHeaders.push(k);
      }
      const val: GrammarChartData | string = value[k];
      if (typeof val !== 'string') {
        throw new Error('Unexpected depth');
      }
      rows[rowHeaderKeys[k]].push(val);
    }
  }

  return { rowHeaders, columnHeaders, rows };
}

function createGrammarChartTables(grammarChartData: GrammarChartData): HelpTable[] {
  const depth: number = countDepth(grammarChartData, 0);

  if (depth !== 2 && depth !== 3) {
    throw new Error('Unsupported depth');
  }

  if (depth === 2) {
    return [{ name: '', data: createGrammarChartTable(grammarChartData) }];
  }

  return Object.keys(grammarChartData).map((key: string) => {
    const gcd = grammarChartData[key];
    if (typeof gcd === 'string') {
      throw new Error('Unexpected value');
    }

    return { name: key, data: createGrammarChartTable(gcd) };
  });
}

export interface GrammarCardQuestionHelpProps {
  readonly path: string[];
}

export default function GrammarCardQuestionHelp({ path }: GrammarCardQuestionHelpProps) {
  const [table, setTable]: [HelpTable[], any] = useState([]);

  useEffect(() => {
    const {
      topic: { grammarChart },
    } = GetTopicCardByKeys(path);

    if (grammarChart !== undefined) {
      setTable(createGrammarChartTables(grammarChart.data));
    }
  }, [path]);

  return (
    <>
      {table.map(({ name, data: { rowHeaders, columnHeaders, rows } }) => {
        const tableKey: string = path.join() + name;
        return (
          <Table key={tableKey}>
            <thead>
              {name !== '' && (
                <tr>
                  <td colSpan={columnHeaders.length + 1} className={'p-0'}>
                    <h5 className="text-center">{name}</h5>
                  </td>
                </tr>
              )}
              <tr>
                <td></td>
                {columnHeaders.map((header: string, indexHeader: number) => (
                  <td key={tableKey + 'header' + indexHeader}>{header}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row: string[], indexRow: number) => {
                const rowKey = tableKey + 'row' + indexRow;
                return (
                  <tr key={rowKey}>
                    <td>{rowHeaders[indexRow]}</td>
                    {row.map((item: string, indexColumn, i) => (
                      <td key={rowKey + 'column' + indexColumn}>{item}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        );
      })}
    </>
  );
}
