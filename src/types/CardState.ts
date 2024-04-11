export enum CardState {
  Asked = 1,
  Answered,
  Completed,
}

export function cardStateLabel(state: CardState) {
  switch (state) {
    case CardState.Asked:
      return 'Answer';
    case CardState.Answered:
      return 'Next';
    case CardState.Completed:
      return 'Repeat Questions';
  }
}
