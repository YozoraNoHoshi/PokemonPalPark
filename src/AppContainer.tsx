import { PureComponent } from 'react';
import { CaughtPokemon, Inventory, BerryIndex, PokeballIndex } from './types';

interface Props {
  children: (arg: any) => any;
}
interface State {
  habitat: string;
  currentPokemon: CaughtPokemon[];
  inventory: Inventory;
  loading: boolean;
}
// Move this to redux eventually
class AppContainer extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      habitat: JSON.parse(localStorage.getItem('habitat')!) || 'field',
      currentPokemon: JSON.parse(localStorage.getItem('currentPokemon')!) || [],
      inventory: JSON.parse(localStorage.getItem('inventory')!) || {},
      loading: false
    };
  }

  // componentDidMount() {
  //   this.setState({ loading: false });
  // }

  changeHabitat = (habitat: any) => {
    this.setState({ habitat });
  };

  modifyItems = (item: BerryIndex | PokeballIndex, quantity: number) => {
    //Quanity is negative if using an item
    let inventory = { ...this.state.inventory };
    let selectedItem = inventory[item];

    if (quantity < 0) {
      selectedItem.quantity <= quantity
        ? delete inventory[item]
        : (selectedItem.quantity += quantity);
    } else {
      selectedItem
        ? (selectedItem.quantity += quantity)
        : (inventory[item] = { name: item, quantity });
    }

    this.setState({ inventory });
  };

  modifyPokemon = (pokemon: CaughtPokemon | string | number) => {
    // Object means adding pokemon, string/number means removing
    if (typeof pokemon === 'object') {
      this.setState(prevSt => {
        return { currentPokemon: [...prevSt.currentPokemon, pokemon] };
      });
    } else {
      this.setState(prevSt => {
        return {
          currentPokemon: prevSt.currentPokemon.filter(p => p.id !== pokemon)
        };
      });
    }
  };

  changeGameState = (type?: string) => {
    if (type === 'load') {
      let currentPokemon =
        JSON.parse(localStorage.getItem('currentPokemon')!) || [];
      let inventory = JSON.parse(localStorage.getItem('inventory')!) || {};
      let habitat = JSON.parse(localStorage.getItem('habitat')!) || 'field';
      this.setState({ currentPokemon, inventory, habitat });
    } else {
      localStorage.setItem(
        'currentPokemon',
        JSON.stringify(this.state.currentPokemon)
      );
      localStorage.setItem('inventory', JSON.stringify(this.state.inventory));
      localStorage.setItem('habitat', JSON.stringify(this.state.habitat));
    }
  };
  render() {
    return this.props.children({
      state: this.state,
      changeGameState: this.changeGameState,
      changeHabitat: this.changeHabitat,
      modifyItems: this.modifyItems,
      modifyPokemon: this.modifyPokemon
    });
  }
}

export default AppContainer;
