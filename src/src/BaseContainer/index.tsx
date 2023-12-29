import { FC } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MyDataGridTable from "./MyDataGridTable";

export interface WeaponType {
  id: number;
  name: string;
  constant: number;
  count: number;
  totalPoint: number;
}

export const initWeapons: WeaponType[] = [
  {
    id: 1,
    name: "Tabanca",
    constant: 180,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 2,
    name: "Makinalı Tabanca",
    constant: 200,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 3,
    name: "Piyade Tüfeği",
    constant: 190,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 4,
    name: "Milkor",
    constant: 120,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 5,
    name: "Keskin Nişancı Tüfeği",
    constant: 130,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 6,
    name: "Launcher",
    constant: 110,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 7,
    name: "LAW",
    constant: 100,
    count: 0,
    totalPoint: 0,
  },
];

export interface EquipmentType {
  id: number;
  name: string;
  constant: number;
  count: number;
  totalPoint: number;
}

export const initEquipment: EquipmentType[] = [
  {
    id: 1,
    name: "El Bombası",
    constant: 180,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 2,
    name: "Flashbang",
    constant: 19,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 3,
    name: "Aydınlatma Fişeği",
    constant: 1,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 4,
    name: "Aydınlatma Mayını",
    constant: 1,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 5,
    name: "El Feneri",
    constant: 18,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 6,
    name: "Mesafe Ölçer",
    constant: 2,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 7,
    name: "GPS",
    constant: 2,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 8,
    name: "Sis Kutusu",
    constant: 8,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 9,
    name: "Dağcılık Ekipmanı",
    constant: 4,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 10,
    name: "Gece Görüş",
    constant: 10,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 11,
    name: "Gaz Mühimmatı",
    constant: 15,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 12,
    name: "Gaz Maskesi",
    constant: 15,
    count: 0,
    totalPoint: 0,
  },
];

export interface AmmoType {
  id: number;
  name: string;
  constant: number;
  count: number;
  totalPoint: number;
}

export const initAmmo: AmmoType[] = [
  {
    id: 1,
    name: "7.62x51mm",
    constant: 3,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 2,
    name: "5.56x45mm",
    constant: 4,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 3,
    name: "9x19mm",
    constant: 5,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 4,
    name: "12.7x99mm",
    constant: 1,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 5,
    name: "RPG-7",
    constant: 100,
    count: 0,
    totalPoint: 0,
  },
];

export interface TrainedPersonnelType {
  id: number;
  name: string;
  constant: number;
  count: number;
  totalPoint: number;
}

export const initTrainedPersonnel: TrainedPersonnelType[] = [
  {
    id: 1,
    name: "Harita Uzmanı",
    constant: 1,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 2,
    name: "Keskin Nişancı",
    constant: 10,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 3,
    name: "Dağcılık Uzmanı",
    constant: 8,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 4,
    name: "İlkyardım Uzmanı",
    constant: 5,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 5,
    name: "Zırhlı Uzmanı",
    constant: 3,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 6,
    name: "Kule Uzmanı",
    constant: 4,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 7,
    name: "İHA Uzmanı",
    constant: 9,
    count: 0,
    totalPoint: 0,
  },
];

export interface VehicleType {
  id: number;
  name: string;
  constant: number;
  count: number;
  totalPoint: number;
}

export const initVehicle: VehicleType[] = [
  {
    id: 1,
    name: "Kobra",
    constant: 500,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 2,
    name: "Ejder",
    constant: 400,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 3,
    name: "Amazon",
    constant: 250,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 4,
    name: "Kirpi",
    constant: 150,
    count: 0,
    totalPoint: 0,
  },
];
export interface PersonelType {
  id: number;
  name: string;
  constant: number;
  count: number;
  totalPoint: number;
}

export const initPersonelTypeModel: PersonelType[] = [
  {
    id: 1,
    name: "Toplam Personel",
    constant: 1,
    count: 0,
    totalPoint: 0,
  },
];

export interface TechnicalEquipmentType {
  id: number;
  name: string;
  constant: number;
  count: number;
  totalPoint: number;
}

export const initTechnicalEquipment: TechnicalEquipmentType[] = [
  {
    id: 1,
    name: "Drone",
    constant: 180,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 2,
    name: "Tablet",
    constant: 100,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 3,
    name: "Silah Üstü Termal",
    constant: 190,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 4,
    name: "Kalkan",
    constant: 190,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 5,
    name: "Telsiz",
    constant: 180,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 6,
    name: "SSB",
    constant: 140,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 7,
    name: "Yelek",
    constant: 190,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 8,
    name: "Taşınabilir Termal",
    constant: 200,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 9,
    name: "Kırıcı Ve Delici Ekipman",
    constant: 160,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 10,
    name: "Kask",
    constant: 190,
    count: 0,
    totalPoint: 0,
  },
  {
    id: 11,
    name: "Harita",
    constant: 150,
    count: 0,
    totalPoint: 0,
  },
];

interface BaseContainerProps {}
const BaseContainer: FC<BaseContainerProps> = ({}) => {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12}>
          <MyDataGridTable
            myCusTomList={initWeapons}
            label={"Ateşli Silahlar"}
          />
        </Grid>

        <Grid xs={12}>
          <MyDataGridTable myCusTomList={initEquipment} label={"Tehçizat"} />
        </Grid>

        <Grid xs={12}>
          <MyDataGridTable
            myCusTomList={initTechnicalEquipment}
            label={"Teknik Ekipmanlar"}
          />
        </Grid>

        <Grid xs={12}>
          <MyDataGridTable myCusTomList={initAmmo} label={"Mühimmat"} />
        </Grid>

        <Grid xs={12}>
          <MyDataGridTable
            myCusTomList={initTrainedPersonnel}
            label={"Eğitimli Personel"}
          />
        </Grid>

        <Grid xs={12}>
          <MyDataGridTable myCusTomList={initVehicle} label={"Araç"} />
        </Grid>

        <Grid xs={12}>
          <MyDataGridTable
            myCusTomList={initPersonelTypeModel}
            label={"Personel"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BaseContainer;
