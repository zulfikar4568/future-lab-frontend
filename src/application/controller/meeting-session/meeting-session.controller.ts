import { AxiosHttpClient } from '@/application/drivers';
import { CreateMeetingSession } from '@/domain/meeting-session';

export function meetingSessionController() {
  const http = new AxiosHttpClient(import.meta.env.FE_BACKEND);

  async function create(value: CreateMeetingSession) {
    return await http.request({
      method: 'post',
      url: '/api/v1/meeting-session/create',
      data: JSON.stringify(value),
    });
  }

  async function join(meetingId: string) {
    return await http.request({
      method: 'post',
      url: `/api/v1/meeting-session/join/${meetingId}`,
    });
  }

  async function end(meetingId: string) {
    return await http.request({
      method: 'delete',
      url: `/api/v1/meeting-session/end/${meetingId}`,
    });
  }

  async function findAll() {
    return await http.request({
      method: 'get',
      url: `/api/v1/meeting-session/all`,
    });
  }
  return {
    create,
    join,
    end,
    findAll,
  };
}
