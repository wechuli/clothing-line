import ShopActionTypes from "./shop.types";
import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispath => {
    const collectionRef = firestore.collection("collections");
    dispath(fetchCollectionStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispath(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispath(fetchCollectionsFailure(error.message)));
  };
};
