import * as React from 'react';
import styles from './Sharepointproject.module.scss';
import { ISharepointprojectProps } from './ISharepointprojectProps';
import Getdata from './Getdata';

export default class Sharepointproject extends React.Component<ISharepointprojectProps, any> {

  public render(): React.ReactElement<ISharepointprojectProps> {
    return (
      <div className={styles.container}>
        <Getdata description={undefined} />
      </div>
    );
  }
}
