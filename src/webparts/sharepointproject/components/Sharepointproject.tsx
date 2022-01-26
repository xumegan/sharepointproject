import * as React from 'react';
import styles from './Sharepointproject.module.scss';
import { ISharepointprojectProps } from './ISharepointprojectProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ClassData } from './ClassData';
import pnp from 'sp-pnp-js';
import { IData } from './IData'

export default class Sharepointproject extends React.Component<ISharepointprojectProps, {}> {
  public constructor(props: ISharepointprojectProps, any) {
    super(props);
    this.state = {
      items: []
    }
  }

  public componentDidMount() {
    debugger;
    this._getListCustomerData();
  }

  private _getListCustomerData(): void {
    pnp.sp.web.lists.getByTitle(`Postman`).items.get().then
      ((response) => {
        let data = response.map(item => new ClassData(item));
        this.setState({ items: data });
      }
      )
  }

  public render(): React.ReactElement<ISharepointprojectProps> {
    return (
      <div className={styles.sharepointproject}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <select className={styles.button}>
                {
                  this.state.items.map(function (item: IData) {
                    return (
                      <option className="ms-Label ms-font-xxl">{item.ID}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
