import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  setSelectedTab: (tab: Tab) => void;
}

export const Tabs: FC<Props> = (props) => {
  const { tabs, selectedTabId, setSelectedTab } = props;

  const isActive = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (tab.id !== isActive.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': tab.id === isActive.id,
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
        </ul>

        <div className="block" data-cy="TabContent">
          {isActive.content}
        </div>
      </div>
    </div>
  );
};
