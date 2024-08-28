import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MotiView } from 'moti'

const CompetitiveExam = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [exams, setExams] = useState([
    'JEE', 'NEET', 'CAT', 'UPSC', 'GATE', 'GRE', 'GMAT', 'SAT', 'ACT'
  ]);
  const [filteredExams, setFilteredExams] = useState(exams);
  const rotation = useRef(0);

  const handleSearchIconPress = () => {
    const toValue = searchVisible ? 0 : 1;
    rotation.current = toValue;
    setSearchVisible(!searchVisible);
  };

  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = exams.filter(exam => exam.toLowerCase().includes(lowerCaseQuery));
      setFilteredExams(filtered);
    } else {
      setFilteredExams(exams);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.titleFont}>Competitive Exams</Text>
      </View>
      <View style={styles.body}>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 500 }}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Explore Top Competitive Exams</Text>
            <TouchableOpacity onPress={handleSearchIconPress}>
              <MotiView
                from={{ rotate: '0deg' }}
                animate={{ rotate: `${rotation.current * 180}deg` }}
                transition={{ type: 'timing', duration: 300 }}
              >
                <MaterialIcons
                  name={searchVisible ? 'close' : 'search'}
                  size={30}
                  color="black"
                  style={styles.searchIcon}
                />
              </MotiView>
            </TouchableOpacity>
          </View>
        </MotiView>
        {searchVisible && (
          <MotiView
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 500 }}
          >
            <TextInput
              style={styles.searchInput}
              placeholder="Search exams..."
              value={searchQuery}
              onChangeText={handleSearchInputChange}
            />
          </MotiView>
        )}
        <ScrollView style={styles.examsContainer} contentContainerStyle={styles.examsContent}>
          {filteredExams.map((exam, index) => (
            <MotiView
              key={index}
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', duration: 500, delay: index * 100 }}
            >
              <TouchableOpacity style={styles.card}>
                <Text style={styles.examText}>{exam}</Text>
              </TouchableOpacity>
            </MotiView>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default CompetitiveExam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  appBar: {
    backgroundColor: '#2196F3',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    padding: 20,
  },
  titleFont: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  examsContainer: {
    marginTop: 10,
  },
  examsContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 1.5,
  },
  examText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
