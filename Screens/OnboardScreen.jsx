// OnboardingScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { MotiView, MotiText } from 'moti';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const Onboard = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to EduAI",
      description: "Experience personalized learning with AI technology.",
    },
    {
      title: "Comprehensive Curriculum",
      description: "Covering grades 6 to 12 and competitive exams.",
    },
    {
      title: "Interactive Learning Tools",
      description: "AI-driven quizzes, practice tests, and learning resources.",
    },
    {
      title: "Progress Tracking and Analytics",
      description: "Track your progress with detailed analytics and reports.",
    },
    {
      title: "Get Started",
      description: "Dive into your personalized learning journey with EduAI!",
    },
  ];

  const nextStep = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      navigation.replace('usercontrolscreen'); // Navigate to Homee screen
    }
  };

  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 1000 }}
        style={styles.content}
      >
        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 1000, delay: 500 }}
          style={styles.title}
        >
          {steps[currentStep].title}
        </MotiText>
        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 1000, delay: 1000 }}
          style={styles.description}
        >
          {steps[currentStep].description}
        </MotiText>
      </MotiView>
      <TouchableOpacity onPress={nextStep}>
        <MotiView
          from={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            type: 'timing',
            duration: 1000,
            loop: true,
            repeatReverse: true,
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{currentStep < steps.length - 1 ? 'Next' : 'Get Started'}</Text>
        </MotiView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    width: width * 0.8,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Onboard;
