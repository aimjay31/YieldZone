import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const initialChat = [
  { id: '1', text: 'Hello! Is the rice available?', sender: 'other' },
  { id: '2', text: 'Yes, we have it in stock!', sender: 'me' },
  { id: '3', text: 'Great, can you deliver tomorrow?', sender: 'other' },
];

const UserMessages = ({ route, goBack }) => {
  const { name } = route?.params || { name: 'Farm Fresh' };
  const [chat, setChat] = useState(initialChat);
  const [input, setInput] = useState('');

  const flatListRef = useRef();

  const sendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = {
      id: (chat.length + 1).toString(),
      text: input,
      sender: 'me',
    };
    setChat([...chat, newMessage]);
    setInput('');
  };

  // Auto-scroll to bottom when chat updates
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [chat]);

  const renderMessage = ({ item }) => {
    const isMe = item.sender === 'me';
    return (
      <View style={[styles.messageContainer, isMe ? styles.myMessage : styles.otherMessage]}>
        <Text style={[styles.messageText, isMe ? styles.myMessageText : styles.otherMessageText]}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{name}</Text>
        <View style={{ width: 50 }} /> {/* Spacer for right side */}
      </View>

      {/* Chat Messages */}
      <FlatList
        ref={flatListRef}
        data={chat}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e5f5ef' },

  // Header
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#159947',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#0d3d2b',
  },
  backButton: { width: 50 },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  headerText: { fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center', flex: 1 },

  // Chat
  chatContainer: { padding: 10, paddingBottom: 20 },
  messageContainer: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '75%',
  },
  myMessage: {
    backgroundColor: '#159947',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  otherMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  messageText: { fontSize: 16 },
  myMessageText: { color: '#fff' },
  otherMessageText: { color: '#333' },

  // Input
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    paddingBottom: 110,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#159947',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 5,
  },
  sendButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default UserMessages;
