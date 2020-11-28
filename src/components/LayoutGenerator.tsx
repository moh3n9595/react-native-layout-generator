import React, {memo, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {randomColor} from '../services/color';

interface LayoutGeneratorProps {
  rule: string;
}

const ROW_HEIGHT = 120;

const LayoutGenerator = memo(({rule}: LayoutGeneratorProps) => {
  const [rowRules, setRowRules] = useState<Array<number>>([]);
  useEffect(() => {
    if (!rule) setRowRules([]);
    else setRowRules(rule.split('/').map((r) => parseInt(r, 10)));
  }, [rule]);

  return (
    <FlatList
      data={rowRules}
      style={styles.list}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({item}: {item: number}) => (
        <View style={styles.row}>
          {new Array(item).fill(undefined).map((_, idx) => {
            return <View key={idx} style={{backgroundColor: randomColor(), flex: 1 / item}} />;
          })}
        </View>
      )}
    />
  );
});

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    height: ROW_HEIGHT,
  },
});

export default LayoutGenerator;
