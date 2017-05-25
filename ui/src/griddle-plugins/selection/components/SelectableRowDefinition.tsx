import * as React from 'react';

interface SelectableRowDefinitionProps {
  rowKey: string;
  childColumnName: string;
  cssClassName: string;
  onClick: (rowData: any) => void;
}

export default class SelectableRowDefinition extends React.Component<SelectableRowDefinitionProps, undefined> {
  render () {
    return null;
  }
}
