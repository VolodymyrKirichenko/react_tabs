import { FC } from 'react';
import { Tab } from '../../types/Tab';
import { Table } from '../Tab/Table';

interface Props {
  tabs: Tab[];
  selectedTabById: string;
  setSelectedTab: (tab: Tab) => void;
  selectedTabByIdContent: string;
}

export const Tabs: FC<Props> = (props) => {
  const {
    tabs,
    selectedTabById,
    setSelectedTab,
    selectedTabByIdContent,
  } = props;

  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTabById) {
      setSelectedTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <Table
            handleClick={handleClick}
            tabs={tabs}
            selectedTabById={selectedTabById}
          />
        </ul>

        <div className="block" data-cy="TabContent">
          {selectedTabByIdContent}
        </div>
      </div>
    </div>
  );
};
