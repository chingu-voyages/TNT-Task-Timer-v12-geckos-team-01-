// Mock data creation helper function
const addMinutes = (date, minutes) => {
  const startDate = new Date(date);
  return startDate.setMinutes(startDate.getMinutes() + minutes);
};

const getOneHourMock = () => [
  {
    taskName: 'Eating Lunch',
    dateCreated: '2019-10-24T00:30:07.411Z',
    timerStatusArray: [
      { status: 'started', when: '2019-10-24T00:30:07.411Z' },
      {
        status: 'paused',
        when: addMinutes('2019-10-24T00:30:07.411Z', 30)
      },
      {
        status: 'resumed',
        when: addMinutes('2019-10-24T00:30:07.411Z', 60)
      },
      { status: 'paused', when: addMinutes('2019-10-24T00:30:07.411Z', 90) }
    ]
  },
  {
    taskName: 'Reading book',
    dateCreated: '2019-10-24T00:30:07.411Z',
    timerStatusArray: [
      { status: 'started', when: '2019-10-24T00:30:07.411Z' },
      {
        status: 'paused',
        when: addMinutes('2019-10-24T00:30:07.411Z', 30)
      },
      {
        status: 'resumed',
        when: addMinutes('2019-10-24T00:30:07.411Z', 60)
      },
      { status: 'paused', when: addMinutes('2019-10-24T00:30:07.411Z', 90) }
    ]
  },
  {
    taskName: 'Coding',
    dateCreated: '2019-10-25T00:30:07.411Z',
    timerStatusArray: [
      { status: 'started', when: '2019-10-25T00:30:07.411Z' },
      {
        status: 'paused',
        when: addMinutes('2019-10-25T00:30:07.411Z', 30)
      },
      {
        status: 'resumed',
        when: addMinutes('2019-10-25T00:30:07.411Z', 60)
      },
      { status: 'paused', when: addMinutes('2019-10-25T00:30:07.411Z', 90) }
    ]
  },
  {
    taskName: 'Dinner',
    dateCreated: '2019-10-26T00:30:07.411Z',
    timerStatusArray: [
      { status: 'started', when: '2019-10-26T00:30:07.411Z' },
      {
        status: 'paused',
        when: addMinutes('2019-10-26T00:30:07.411Z', 30)
      },
      {
        status: 'resumed',
        when: addMinutes('2019-10-26T00:30:07.411Z', 60)
      },
      { status: 'paused', when: addMinutes('2019-10-26T00:30:07.411Z', 90) }
    ]
  },
  {
    taskName: 'working',
    dateCreated: '2019-10-26T00:30:07.411Z',
    timerStatusArray: [
      { status: 'started', when: '2019-10-26T00:30:07.411Z' },
      {
        status: 'paused',
        when: addMinutes('2019-10-26T00:30:07.411Z', 30)
      },
      {
        status: 'resumed',
        when: addMinutes('2019-10-26T00:30:07.411Z', 60)
      },
      { status: 'paused', when: addMinutes('2019-10-26T00:30:07.411Z', 90) }
    ]
  }
];

export default getOneHourMock;
