export interface CreateMeetingSession {
  title: string;
  fromDate: Date;
  toDate: Date;
  userAttendeeId: string;
  echoReduction?: boolean;
  region: string;
}
