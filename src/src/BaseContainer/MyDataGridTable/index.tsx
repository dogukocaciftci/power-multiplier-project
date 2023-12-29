import * as React from "react";
import Box from "@mui/material/Box";
import {
  GridRowsProp,
  GridRowModesModel,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridEventListener,
  GridRowModel,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { Card, Typography } from "@mui/material";
import { FC } from "react";

interface EditToolbarProps {
  label: string;
}

function EditToolbar({ label }: EditToolbarProps) {
  return (
    <GridToolbarContainer>
      <Box sx={{ ml: 3, px: 2 }}>
        <Typography variant="h5">{label}</Typography>
      </Box>
    </GridToolbarContainer>
  );
}

// Bu, TotalPowerRow bileşeni için props'un tipi.
interface TotalPowerRowProps {
  totalPower: number;
}

// Bu, TotalPowerRow bileşeni/fonksiyonunun tipi.
const TotalPowerRow: FC<TotalPowerRowProps> = ({ totalPower }) => (
  <div style={{ textAlign: "left", padding: "10px" }}>
    <strong>Toplam Güç Çarpanı:</strong> {totalPower} Puan
  </div>
);

interface MyDataGridTableContainerProps {
  myCusTomList: GridRowsProp;
  label: string;
}

const MyDataGridTableContainer: FC<MyDataGridTableContainerProps> = ({
                                                                       myCusTomList,
                                                                       label,
                                                                     }) => {
  const [rows, setRows] = React.useState(myCusTomList);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  // Bu toplam güç çarpanını hesaplayan fonksiyon.
  const calculateTotalPower = () => {
    return rows.reduce((total, row) => total + row.constant * row.count, 0);
  };

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    // @ts-ignore
    if (updatedRow.count < 0) {
      // @ts-ignore
      updatedRow.count = 0;
    }
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "İsim",
      width: 160,
      editable: true,
      renderHeader: (params) => <b>{params.colDef.headerName}</b>,
    },
    {
      field: "constant",
      headerName: "Çarpan",
      width: 70,
      editable: false,
      renderHeader: (params) => <b>{params.colDef.headerName}</b>,
    },
    {
      field: "count",
      headerName: "Adet",
      type: "number",
      width: 80,
      align: "left",
      headerAlign: "left",
      editable: true,
      renderHeader: (params) => <b>{params.colDef.headerName}</b>,
      renderCell: (params) => {
        return (
          <Card
            sx={{
              width: 80,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {params.row.count}
          </Card>
        );
      },
    },
    {
      field: "totalPoint",
      headerName: "Toplam Puan",
      type: "number",
      width: 200,
      align: "left",
      headerAlign: "left",
      editable: false,
      renderHeader: (params) => <b>{params.colDef.headerName}</b>,
      renderCell: (params) => {
        return (
          <Card
            sx={{
              width: 80,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {params.row.constant * params.row.count}
          </Card>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
          color: `#303030`,
        },
        boxShadow: 1,
        border: 1,
        width: "100%",
        minWidth: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        }
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        hideFooterPagination={true}
        hideFooter={true}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { label },
        }}
      />
      {/* Bu en alt kısımda toplam güç çarpanını gösteren satır.*/}
      <TotalPowerRow totalPower={calculateTotalPower()} />
    </Box>
  );
};

export default MyDataGridTableContainer;
