export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Henne guet!', 'Wäutsguet!', 'Nid schlecht!']
export const GAME_COPIED_MESSAGE = 'Spiu kopiert'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nid gnueg Buechstabe'
export const WORD_NOT_FOUND_MESSAGE = 'Wort nid gfunge'
export const HARD_MODE_ALERT_MESSAGE =
  'Dr «Schwär Modus» cha nur am Afang aktiviert wärde.'
export const HARD_MODE_DESCRIPTION =
  'Aui ufdeckte Hiiwiis müesse in nächschte Versuech brucht wärde'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Für bessers Farbsehe'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Z'wort wär ${solution} gsi`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Muesch «${guess}» ar ${position}. Position bruche`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Muesch dr Buechstabe ${letter} bruche`
export const ENTER_TEXT = 'Igäh'
export const DELETE_TEXT = 'Lösche'
export const STATISTICS_TITLE = 'Statistik'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'Nois wort in'
export const SHARE_TEXT = 'Teilä'
export const TOTAL_TRIES_TEXT = 'Spiu gspiut'
export const SUCCESS_RATE_TEXT = 'Spiu gwunne'
export const CURRENT_STREAK_TEXT = 'Aktuelle Gwinnserie'
export const BEST_STREAK_TEXT = 'Besti Gwinnserie'
