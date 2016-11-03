ag-Grid Aurelia Component  ALPHA RELEASE!!!
==============

This project contains the Aurelia Component for use with ag-Grid.

Usage
==============

in your main entry.
```
aurelia.use
    .standardConfiguration()
    .plugin('ag-grid-aurelia');
```

In your view model
```
import {GridOptions} from 'ag-grid';
export class MyGridPage {

    public gridOptions:GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = [{id: 1, name: 'Shane'}, {id: 2, name: 'Sean'}];

        //so we can reference the viewModel in the templates
        this.gridOptions.context = {vm:this};
    }

    public onGridReady(){
        console.log('Grid is ready!!');
        console.log('1st col field = ' + this.gridOptions.columnDefs[0].field);
    }

    public onIdClicked(row){
        console.log('id clicked ' + row.id);
    }
}


```


In your view template.  Here we are adding columns using markup. ColumnDefs can be added from your view model if you wish.
```
<template>
    <div style="width: 100%; height: 350px;">
      <ag-grid-aurelia grid-options.bind="gridOptions" class="ag-material"
                       row-height.bind="48"
                       grid-ready.call="onGridReady()">
        <ag-grid-column header-name="My Group Column">
          <ag-grid-column header-name="Id" field="id">
              <ag-template>
                <button md-button class="btn accent"  click.delegate="params.context.vm.onIdClicked(params.data)">${params.value}</button>
              </ag-template>
          </ag-grid-column>
          <ag-grid-column header-name="Name" field="name" >
          </ag-grid-column>
        </ag-grid-column>

      </ag-grid-aurelia>
    </div>

</template>
```



Building
==============

To build:
- npm install
- npm install gulp -g
- npm install aurelia-framework
- npm install ag-grid
- (or: npm install aurelia-framework && npm install ag-grid)

- npm run build
