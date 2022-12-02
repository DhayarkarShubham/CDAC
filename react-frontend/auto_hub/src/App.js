import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/SigninScreen";
import RegistrationScreen from "./screens/SignupScreen";
import AboutScreen from "./screens/AboutScreen";
import Navigation from "./components/Navigation";
import AdminScreen from "./screens/AdminScreen";
import SupplierScreen from "./screens/SupplierScreen";
import Footer from "./components/Footer";
import SparePartsScreen from "./screens/SparePartsScreen";
import OilScreen from "./screens/OilScreen";
import ToolsScreen from "./screens/ToolsScreen";
import MachineryScreen from "./screens/MachineryScreen";
import ProductAddScreen from "./screens/AddProductScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ProductsScreen from "./screens/ProductsScreen";
import AddNewSupplier from "./screens/AddNewSupplier";
import AddCategoryScreen from "./screens/AddCategoryScreen";
import UpdateProductScreen from "./screens/UpdateProductScreen";
import ViewProfileScreen from "./screens/ViewProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import OrderProcessScreen from "./screens/OrderProcessScreen";
import CartScreen from "./screens/CartScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div class="container">
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/registration-supplier" component={AddNewSupplier} />
            <Route path="/registration-customer"component={RegistrationScreen}/>
            <Route path="/about" component={AboutScreen} />
            <Route path="/supplier" component={SupplierScreen} />
            <Route path="/spareParts" component={SparePartsScreen} />
            <Route path="/oil" component={OilScreen} />
            <Route path="/tools" component={ToolsScreen} />
            <Route path="/machinery" component={MachineryScreen} />
            <Route path="/add_product" component={ProductAddScreen} />
            <Route path="/add_category" component={AddCategoryScreen} />
            <Route path="/category" component={CategoryScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/update_product" component={UpdateProductScreen} />
            <Route path="/profile" component={ViewProfileScreen} />
            <Route path="/edit_profile" component={EditProfileScreen} />
            <Route path="/admin" component={AdminScreen} />
            <Route path="/process-order" component={OrderProcessScreen} />

            <Route path="/cart" component={CartScreen} />
            <Route path="/orders" component={OrderScreen} />
            {/* <Route path="/" component={HomeScreen}/> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
