const todos = [
  {
    id: 23060,
    task: 'To the beach!',
    description: 'Remember water and sunblock!',
    icon: 'fad fa-umbrella-beach fa-fw',
    done: false,
  },
  {
    id: 23061,
    task: 'Make coffee',
    description: '9 tsp of ground coffee, 8 cups of water.',
    icon: 'fad fa-coffee-pot fa-fw',
    done: true,
  },
  {
    id: 23062,
    task: 'Take a shower',
    description: 'And wash behind your ears!',
    icon: 'fad fa-shower fa-fw',
    done: true,
  },
  {
    id: 23063,
    task: 'Change light bulbs',
    description: 'Atleast livingroom and backyard are out.',
    icon: 'fad fa-lightbulb fa-fw',
    done: false,
  },
  {
    id: 23064,
    task: 'Vacuum downstairs',
    description: 'Hallway is especially sandy!',
    icon: 'fad fa-vacuum fa-fw',
    done: false,
  },
  {
    id: 23065,
    task: 'Take a nap!',
    description: "You've earned it!",
    icon: 'fad fa-snooze fa-fw',
    done: false,
  },
  {
    id: 23066,
    task: 'Rock the room!',
    description: "But not too hard, we're working here.",
    icon: 'fad fa-speakers fa-fw',
    done: false,
  },
  {
    id: 23067,
    task: 'Do laundry',
    description: 'Almost out of t-shirts!',
    icon: 'fad fa-washer fa-fw',
    done: false,
  },
  {
    id: 23068,
    task: 'Light reading',
    description: 'New reading on kitchen table.',
    icon: 'fad fa-books fa-fw',
    done: false,
  },
  {
    id: 23069,
    task: 'Have some pizza',
    description: 'Just a slice.. and maybe one more.',
    icon: 'fad fa-pizza fa-fw',
    done: false,
  },
];

export default class MockAPI {
  constructor() {
    this.todos = todos;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  async getTodos() {
    // mock delay
    await new Promise((resolve) => {
      setTimeout(resolve, Math.round(Math.random() * 2000));
    });

    // emulate response similar from fetch
    const response = new Response(JSON.stringify(this.todos), {
      status: 200,
      statusText: 'OK',
      headers: this.headers,
    });
    return response;
  }
}
