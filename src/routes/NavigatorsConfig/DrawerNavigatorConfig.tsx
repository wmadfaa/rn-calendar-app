import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigatorConfig, ScrollView, SafeAreaView, DrawerItemsProps } from 'react-navigation';
import { theme } from '../../styles/index';

import Text from '../../components/Text/Text';
import { DrawerStyles as styles } from './NavigatorsConfig.style';

import headerBackground from '../../assets/images/illustrations/drawer-header.png';

import ThreeDaysIcon from '../../assets/icons/drawer/3-day.svg';
import DayIcon from '../../assets/icons/drawer/day.svg';
import MonthIcon from '../../assets/icons/drawer/month.svg';
import ScheduleIcon from '../../assets/icons/drawer/schedule.svg';
import WeekIcon from '../../assets/icons/drawer/week.svg';
import Checkbox from '../../components/Checkbox/Checkbox';

enum ViewTypes {
  ThreeDays = 'ThreeDays',
  Day = 'Day',
  Month = 'Month',
  Schedule = 'Schedule',
  Week = 'Week',
}

const Drawer: React.FC<DrawerItemsProps> = () => {
  const [activeView, setActiveView] = useState<ViewTypes>();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.header}>
          <Image source={headerBackground} />
        </View>
        <View style={styles.section}>
          <View style={styles.sectionTitle}>
            <Text variant="h3" style={styles.title}>
              View
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.sectionItem, activeView === ViewTypes.Schedule ? styles.activeSectionItem : {}]}
            onPress={() => setActiveView(ViewTypes.Schedule)}
          >
            <ScheduleIcon fill={activeView === ViewTypes.Schedule ? theme.colors.primary.dark : undefined} />
            <Text variant="h4" light style={styles.sectionLabel}>
              Schedule
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sectionItem, activeView === ViewTypes.Day ? styles.activeSectionItem : {}]}
            onPress={() => setActiveView(ViewTypes.Day)}
          >
            <DayIcon fill={activeView === ViewTypes.Day ? theme.colors.primary.dark : undefined} />
            <Text variant="h4" light style={styles.sectionLabel}>
              Day
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sectionItem, activeView === ViewTypes.ThreeDays ? styles.activeSectionItem : {}]}
            onPress={() => setActiveView(ViewTypes.ThreeDays)}
          >
            <ThreeDaysIcon fill={activeView === ViewTypes.ThreeDays ? theme.colors.primary.dark : undefined} />
            <Text variant="h4" light style={styles.sectionLabel}>
              3 day
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sectionItem, activeView === ViewTypes.Week ? styles.activeSectionItem : {}]}
            onPress={() => setActiveView(ViewTypes.Week)}
          >
            <WeekIcon fill={activeView === ViewTypes.Week ? theme.colors.primary.dark : undefined} />
            <Text variant="h4" light style={styles.sectionLabel}>
              Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sectionItem, activeView === ViewTypes.Month ? styles.activeSectionItem : {}]}
            onPress={() => setActiveView(ViewTypes.Month)}
          >
            <MonthIcon fill={activeView === ViewTypes.Month ? theme.colors.primary.dark : undefined} />
            <Text variant="h4" light style={styles.sectionLabel}>
              Month
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionTitle}>
            <Text variant="h3" style={styles.title}>
              Show
            </Text>
          </View>
          <View style={styles.sectionItem}>
            <Checkbox
              outline
              right={
                <Text variant="h4" light style={styles.sectionLabel}>
                  Events
                </Text>
              }
            />
          </View>
          <View style={styles.sectionItem}>
            <Checkbox
              outline
              right={
                <Text variant="h4" light style={styles.sectionLabel}>
                  Birthdays
                </Text>
              }
            />
          </View>
          <View style={styles.sectionItem}>
            <Checkbox
              outline
              right={
                <Text variant="h4" light style={styles.sectionLabel}>
                  Holidays
                </Text>
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const config: DrawerNavigatorConfig = {
  contentComponent: Drawer,
  overlayColor: theme.colors.components.overlay,
};

export default config;
