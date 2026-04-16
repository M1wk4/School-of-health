import { useState } from "react";

import { useAppContext } from "@/context/AppContextProvider";
import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { ThemeToggler } from "@consta/uikit/ThemeToggler";
import { IconSun } from "@consta/icons/IconSun";
import { IconMoon } from "@consta/icons/IconMoon";
import { IconLightningBolt } from "@consta/icons/IconLightningBolt";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { Text } from "@consta/uikit/Text";

import SideBar from "../SideBar/SideBar";

import { Theme } from "@/types/theme.types";
import { SideBarItem } from "@/types/sideBar.types";

import { themes } from "@/constants/themes";

import classes from "./Header.module.scss";

const getItemIcon = (item: Theme) => {
  if (item === "Default") {
    return IconSun;
  }
  if (item === "Dark") {
    return IconMoon;
  }
  return IconLightningBolt;
};

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [checked, setChecked] = useState<SideBarItem | undefined>(undefined);

  const { valueTheme, setValueTheme } = useAppContext();

  return (
    <Layout direction="row" className={classes.container}>
      <Layout direction="row" className={classes.label}>
        <Button
          size="m"
          view="ghost"
          iconLeft={IconHamburger}
          onlyIcon
          onClick={() => setOpen(!open)}
        />
        <Text className={classes.text} view="primary" weight="semibold"> {checked?.label ?? 'Главная'} </Text>
      </Layout>
      <ThemeToggler
        view="ghost"
        items={themes}
        value={valueTheme}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        getItemIcon={getItemIcon}
        onChange={setValueTheme}
        direction="downStartLeft"
      />
      <SideBar setOpen={setOpen} open={open} setChecked={setChecked} checked={checked}/>
    </Layout>
  );
};

export default Header;
