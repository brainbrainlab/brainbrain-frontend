import { useTranslation } from 'react-i18next';

import * as S from './ScoreTable.styles';

// Score level literal type
export type ScoreLevelType =
  | 'highest'
  | 'higher'
  | 'high'
  | 'aboveAverage'
  | 'belowAverage'
  | 'low'
  | 'lower'
  | 'lowest';

export interface ScoreLevel {
  level: ScoreLevelType; // string -> ScoreLevelType
  range: string;
  translationKey: string;
  hasMensaNote?: boolean;
}

const SCORE_LEVELS: ScoreLevel[] = [
  { level: 'highest', range: '172+', translationKey: 'main.section2.scores.highest', hasMensaNote: true },
  { level: 'higher', range: '148 - 171', translationKey: 'main.section2.scores.higher', hasMensaNote: true },
  { level: 'high', range: '124 - 147', translationKey: 'main.section2.scores.high' },
  { level: 'aboveAverage', range: '101 - 123', translationKey: 'main.section2.scores.aboveAverage' },
  { level: 'belowAverage', range: '76 - 99', translationKey: 'main.section2.scores.belowAverage' },
  { level: 'low', range: '52 - 75', translationKey: 'main.section2.scores.low' },
  { level: 'lower', range: '29 - 51', translationKey: 'main.section2.scores.lower' },
  { level: 'lowest', range: '0 - 28', translationKey: 'main.section2.scores.lowest' },
] as const;

interface ScoreTableProps {
  hoveredLevel: ScoreLevelType | null; // string -> ScoreLevelType
  onHover: (level: ScoreLevelType | null) => void; // string -> ScoreLevelType
}

const ScoreTable = ({ hoveredLevel, onHover }: ScoreTableProps) => {
  const { t } = useTranslation();

  return (
    <S.ScoreTable>
      {SCORE_LEVELS.map(({ level, range, translationKey, hasMensaNote }) => (
        <S.ScoreRow key={level} $level={level} onMouseEnter={() => onHover(level)} onMouseLeave={() => onHover(null)}>
          <S.ScoreRange>{range}</S.ScoreRange>
          <S.ScoreDescription>
            {t(translationKey)}
            {hasMensaNote && <S.RedAsterisk>*</S.RedAsterisk>}
          </S.ScoreDescription>
        </S.ScoreRow>
      ))}
      <S.ScoreNote>
        <S.RedAsterisk>*</S.RedAsterisk>
        {t('main.section2.scores.mensaNote')}
      </S.ScoreNote>
    </S.ScoreTable>
  );
};

export default ScoreTable;
