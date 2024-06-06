export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.inputValue;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getUser = state => state.user.user;
export const getIsLoggedIn = state => state.user.isLoggedIn;
export const getIsFetchingCurrentUser = state =>
  state.user.isLoading;
export const getToken = state => state.user.token;
