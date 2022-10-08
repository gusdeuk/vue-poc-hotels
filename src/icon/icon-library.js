// import FA 5 base stuff
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// get from 3 free libraries
// https://fontawesome.com/icons?d=gallery&s=brands,regular,solid&m=free

// FAS
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee, faSpinner);

// FAR
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
library.add(faAddressCard);

// FAB
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter);

// usage examples
// https://github.com/FortAwesome/vue-fontawesome
// https://codesandbox.io/s/github/FortAwesome/vue-fontawesome/tree/master/examples/vue-cli-webpack?file=/src/App.vue

// export global custom icon library
export { FontAwesomeIcon as iconLibrary };
