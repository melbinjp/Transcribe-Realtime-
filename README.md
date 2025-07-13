# Real-Time Transcription

A powerful web-based real-time speech-to-text transcription tool that converts spoken words into text instantly. Supports multiple languages and provides timestamped transcripts.

## 🌟 Features

- **Real-Time Transcription**: Convert speech to text as you speak
- **Multiple Languages**: Support for English (UK), Malayalam, and Hindi
- **Timestamped Output**: Get precise timing information for each word
- **SRT Export**: Download transcripts in SubRip (SRT) format for video subtitles
- **Browser-Based**: No software installation required
- **High Accuracy**: Powered by advanced speech recognition technology
- **Live Preview**: See transcription appear in real-time

## 🚀 Usage

1. **Start Transcription**: Click "Start Transcription" to begin
2. **Select Language**: Choose your preferred language from the dropdown
3. **Speak Clearly**: Talk into your microphone
4. **View Results**: Watch your speech appear as text in real-time
5. **Stop Recording**: Click "Stop Transcription" when finished
6. **Download**: Save your transcript as an SRT file

## 🛠️ Supported Languages

- **English (UK)** - British English with UK pronunciation
- **Malayalam** - Indian language spoken in Kerala
- **Hindi** - Indian language with Devanagari script

## 🔧 Technical Details

- **Web Speech API**: Uses browser's built-in speech recognition
- **MediaStream API**: Captures audio from microphone
- **SRT Format**: Standard subtitle format for video editing
- **Responsive Design**: Works on desktop and mobile devices

## 📱 Browser Compatibility

| Browser | Speech Recognition | SRT Export |
|---------|-------------------|------------|
| Chrome  | ✅ Full Support | ✅ Full Support |
| Firefox | ⚠️ Limited Support | ✅ Full Support |
| Safari  | ⚠️ Limited Support | ✅ Full Support |
| Edge    | ✅ Full Support | ✅ Full Support |

## 🚨 Permissions

The app requires permission to:
- Access your microphone for speech input
- Download files for SRT export

## 📄 SRT Format

The exported SRT file includes:
- Sequential subtitle numbers
- Timestamp ranges (start → end)
- Transcribed text
- Empty line separators

Example SRT format:
```
1
00:00:01,000 --> 00:00:04,000
Hello, this is a test transcription.

2
00:00:04,500 --> 00:00:07,500
The speech recognition is working well.
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Live Demo

Try the real-time transcription tool: [Demo Link]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 Tips for Best Results

- Use a quiet environment with minimal background noise
- Speak clearly and at a moderate pace
- Ensure your microphone is working properly
- Use supported browsers for best compatibility
- Check microphone permissions in your browser settings 