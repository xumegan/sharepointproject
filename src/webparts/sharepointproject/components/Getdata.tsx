import * as React from 'react';
import styles from './Sharepointproject.module.scss';
import { ISharepointprojectProps } from './ISharepointprojectProps';
import { ClassData } from './ClassData';
import { IData } from './IData';

export default class Getdata extends React.Component<ISharepointprojectProps, any> {
  public constructor(props: ISharepointprojectProps, any) {
    super(props);
    this.state = { items: [] }
  }

  componentDidMount() {
    debugger;
    this.RetrieveSPData();
  }

  RetrieveSPData() {
    var reactHandler = this;
    //https://2cwt5k.sharepoint.com/sites/testdata/Lists/Postman/AllItems.aspx
    var spRequest = new XMLHttpRequest();
    spRequest.open('GET', "/sites/testdata/_api/web/lists/getbytitle('Postman')/items", true);
    spRequest.setRequestHeader("Accept", "application/json");

    spRequest.onreadystatechange = function () {

      if (spRequest.readyState === 4 && spRequest.status === 200) {
        var result = JSON.parse(spRequest.responseText);
        console.log(result.value)
        reactHandler.setState({
          items: result.value
        });
      }
      else if (spRequest.readyState === 4 && spRequest.status !== 200) {
        console.log('Error Occurred !');
      }
    };
    spRequest.send();
  }

  public render(): React.ReactElement<ISharepointprojectProps> {
    return (
      <select className={styles.select}>
        {
          this.state.items.map(function (item: IData) {
            return (
              <option className="ms-Label ms-font-xxl">{item.Title}</option>
            )
          })
        }
      </select>
    );
  }
}
