export class LoggerService {

  logOnStatusChanged(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

  logOnAccountAdded(accountStatus: string) {
    console.log('A server status changed, new status: ' + accountStatus);

  }
}
