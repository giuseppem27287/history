import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ChartType} from 'angular-google-charts';
import {ModuloHistoryComponent} from './modulo-history/modulo-history.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'history';

  data2 = [
    {
      "timestamp": "2021-05-20T16:16:09.779418+00:00",
      "value": 3.1081249713897705,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:09.760416+00:00",
      "value": 2.862499952316284,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:09.272677+00:00",
      "value": 3.1081249713897705,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:09.255315+00:00",
      "value": 2.8631248474121094,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:08.767793+00:00",
      "value": 3.1081249713897705,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:08.749414+00:00",
      "value": 2.8631248474121094,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:08.26015+00:00",
      "value": 3.1078124046325684,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:08.246084+00:00",
      "value": 2.8628125190734863,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:07.751038+00:00",
      "value": 3.1078124046325684,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:07.740119+00:00",
      "value": 2.8628125190734863,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:07.241441+00:00",
      "value": 3.1078124046325684,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:07.237019+00:00",
      "value": 2.8631248474121094,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:06.733896+00:00",
      "value": 3.107499837875366,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:06.731025+00:00",
      "value": 2.8634374141693115,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:06.228011+00:00",
      "value": 2.8631248474121094,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:06.226765+00:00",
      "value": 3.1078124046325684,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:05.721109+00:00",
      "value": 3.1078124046325684,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:05.719002+00:00",
      "value": 2.8628125190734863,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:05.215241+00:00",
      "value": 2.8628125190734863,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    },
    {
      "timestamp": "2021-05-20T16:16:05.21425+00:00",
      "value": 3.107499837875366,
      "state": 16,
      "flag": 0,
      "ref_id": 50015
    }
  ];

  type = ChartType.LineChart;
  data = [
    ['Jan',  500],
    ['Feb',  800],
    ['Mar',  400],
    ['Apr',  600],
    ['May',  400],
    ['Jun',  750],
    ['Jul',  800],
    ['Aug',  810],
    ['Sep',  820],
    ['Oct',  900],
    ['Nov',  910],
    ['Dec',  920]
  ];

  columnNames = ['Day', 'Value'];
  options = {
    hAxis: {
      title: 'Day'
    },
    vAxis: {
      title: 'Value'
    }
  };

  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target?: ViewContainerRef;

  componentRef?: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  addNewComponent() {
    let childComponent = this.resolver.resolveComponentFactory(ModuloHistoryComponent);
    this.componentRef = this.target?.createComponent(childComponent);
  }
}
