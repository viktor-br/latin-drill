import { Topic } from '../types/Topic';
import IrregularVerbsConjugation from './IrregularVerbsConjugation';
import CreateConjugationActive from './CreateConjugationActive';
import CreateConjugationPassive from './CreateConjugationPassive';

const FirstConjugation: Topic = {
  title: 'First (amo,amare,amavi,amatus)',
  name: 'first',
  topics: [await CreateConjugationActive('first'), await CreateConjugationPassive('first')],
};

const SecondConjugation: Topic = {
  title: 'Second (moneo,monere,monui,monitus)',
  name: 'second',
  topics: [await CreateConjugationActive('second'), await CreateConjugationPassive('second')],
};

const ThirdConjugation: Topic = {
  title: 'Third (rego,regere,rexi,rectum)',
  name: 'third',
  topics: [await CreateConjugationActive('second'), await CreateConjugationPassive('third')],
};

const FourthConjugation: Topic = {
  title: 'Fourth (audio,audire,audivi,auditum)',
  name: 'fourth',
  topics: [await CreateConjugationActive('second'), await CreateConjugationPassive('fourth')],
};

const MixedConjugation: Topic = {
  title: 'Mixed (capio,capere,cepi,captum)',
  name: 'mixed',
  topics: [await CreateConjugationActive('second'), await CreateConjugationPassive('mixed')],
};

const Conjugation: Topic = {
  title: 'Conjugation',
  name: 'conjugation',
  topics: [
    FirstConjugation,
    SecondConjugation,
    ThirdConjugation,
    FourthConjugation,
    MixedConjugation,
    IrregularVerbsConjugation,
  ],
};
export default Conjugation;
