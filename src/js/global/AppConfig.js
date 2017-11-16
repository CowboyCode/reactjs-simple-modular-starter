class AppConfig {
  static getConfig() {
    return {
      app: {
        title: 'React Starter'
      },
      firebaseConfig: {
        apiKey: 'XXXXXXXXXX',
        authDomain: 'XXXXXXXXX',
        databaseURL: 'XXXXXXXXX',
        storageBucket: 'XXXXXXXXX',
        messagingSenderId: 'XXXXXXXXXX',
        persistence: true
      },
      remoteApi: 'xxxxxxxxxxx'
    }
  }
}

export default AppConfig
