export interface NavigationElement {
  readonly label: string;
  readonly name: string;
  readonly subElements: NavigationElement[];
}
