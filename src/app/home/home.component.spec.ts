import { CounterComponent } from '../counter/counter.component';

describe('Home component', () => {
  let counterComponent: CounterComponent = null;

  beforeEach(() => {
    counterComponent = new CounterComponent();
  });

  it('should set counter instance correctly', () => {
    expect(counterComponent).not.toBeNull();
  });
});
