import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';
import VoteOptions from '../VoteOptions/VoteOptions';

export default function App() {

  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

    const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1
    }));
    };
  
    const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
    };
  
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </div>
  )
}

