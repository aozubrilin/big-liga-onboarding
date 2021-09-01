import { ieFix } from "./utils/ie-fix";
import { iosVhFix } from "./utils/ios-vh-fix";

import { preloader } from "./modules/preloader";
import { changeIntroTablet } from "./modules/changeIntroTablet";

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

preloader();
changeIntroTablet();
