import NetInfo from "@react-native-community/netinfo";

class Internet {
  static async check() {
    const response = await NetInfo.fetch();
    return response.isConnected;
  }
}

export default Internet;
