import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  handleClick: (tab: Tab) => void;
  selectedTabById: string;
}

export const Table: FC<Props> = (props) => {
  const { tabs, handleClick, selectedTabById } = props;

  return (
    <>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({
            'is-active': tab.id === selectedTabById,
          })}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => handleClick(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </>
  );
};
