import { NavigationElement } from './NavigationElement';

export interface CardsNavigationElementProps {
  readonly navigationElement: NavigationElement;
  readonly parentPath: string;
  readonly level: number;
}
