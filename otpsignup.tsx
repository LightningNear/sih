import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function OTPVerification() {
  const [otp, setOtp] = useState('');
  const { mobile, email } = useLocalSearchParams();
  const router = useRouter();

  const onVerify = () => {
    // Simple OTP length check example (e.g. 6 digits)
    if (otp.length === 6) {
      alert('OTP Verified!');
      // Navigate further or complete signup flow
      router.push('/home'); // or whatever your next screen is
    } else {
      alert('Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        An OTP has been sent to your mobile number {mobile} and email {email}.
      </Text>

      <TextInput
        style={styles.otpInput}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={6}
      />

      <Pressable style={styles.verifyButton} onPress={onVerify}>
        <Text style={styles.verifyButtonText}>Verify OTP</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#daf5d4',
  },
  infoText: {
    fontSize: 16,
    color: '#276749',
    marginBottom: 20,
    textAlign: 'center',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#276749',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#276749',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
