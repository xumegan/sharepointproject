import * as React from 'react';
import styles from './Sharepointproject.module.scss';
import { ISharepointprojectProps } from './ISharepointprojectProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ClassData } from './ClassData';
export default class Sharepointproject extends React.Component<ISharepointprojectProps, {}> {
  public render(): React.ReactElement<ISharepointprojectProps> {
    return (
      <div className={styles.sharepointproject}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
