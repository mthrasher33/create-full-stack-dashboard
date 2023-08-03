class ETLService {
  constructor(fileName) {
    this.fileName = fileName;
  }

  run() {
    return this.fileName + ' is the file name you were looking for';
  }
}

module.exports = ETLService;
