import "reflect-metadata";
require('zone.js');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPComponentLoader } from '@microsoft/sp-loader';
import styles from './IgPaisesWebPart.module.scss';
import * as strings from 'IgPaisesWebPartStrings';

export interface IIgPaisesWebPartProps {
  description: string;
}

export default class IgPaisesWebPart extends BaseClientSideWebPart<IIgPaisesWebPartProps> {

  public render(): void {  
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.css');  
    this.domElement.innerHTML = '<app-root></app-root>';
    platformBrowserDynamic().bootstrapModule(AppModule);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
