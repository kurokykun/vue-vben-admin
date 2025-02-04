import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  JSONString: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type ActionSystemNode = Node & {
  __typename?: 'ActionSystemNode';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  user: BuyerType;
};

export type ActionSystemNodeConnection = {
  __typename?: 'ActionSystemNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ActionSystemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ActionSystemNode` and its cursor. */
export type ActionSystemNodeEdge = {
  __typename?: 'ActionSystemNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ActionSystemNode>;
};

export type ActiveAddressMutation = {
  __typename?: 'ActiveAddressMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<AddressNode>;
};

export type AddDevice = {
  __typename?: 'AddDevice';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<FcmDeviceNode>;
};

export type AddProductPromotionMutation = {
  __typename?: 'AddProductPromotionMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<PromotionNode>;
};

export type AddressNode = Node & {
  __typename?: 'AddressNode';
  active: Scalars['Boolean']['output'];
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  codeZip?: Maybe<Scalars['String']['output']>;
  country?: Maybe<CountryNode>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  orderSet: OrderNodeConnection;
  phone?: Maybe<Scalars['String']['output']>;
  stateProvinceRegion?: Maybe<Scalars['String']['output']>;
  user: BuyerType;
};


export type AddressNodeOrderSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cantProduct?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gte?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceEstimatedTaxToBeCollected?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gte?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lte?: InputMaybe<Scalars['Date']['input']>;
  statusPayment?: InputMaybe<CoreOrderStatusPaymentChoices>;
  userBuyer_Email?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Id?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type AddressNodeConnection = {
  __typename?: 'AddressNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AddressNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AddressNode` and its cursor. */
export type AddressNodeEdge = {
  __typename?: 'AddressNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<AddressNode>;
};

export type BankNode = Node & {
  __typename?: 'BankNode';
  accountNumber?: Maybe<Scalars['BigInt']['output']>;
  active: Scalars['Boolean']['output'];
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  idBankStripe?: Maybe<Scalars['String']['output']>;
  jsonBank?: Maybe<Scalars['JSONString']['output']>;
  name: Scalars['String']['output'];
  nameAccount: Scalars['String']['output'];
  routingNumber: Scalars['BigInt']['output'];
  user: BuyerType;
};

export type BankNodeConnection = {
  __typename?: 'BankNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BankNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `BankNode` and its cursor. */
export type BankNodeEdge = {
  __typename?: 'BankNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BankNode>;
};

export type BuyerType = {
  __typename?: 'BuyerType';
  actionsystemSet: ActionSystemNodeConnection;
  addressSet: AddressNodeConnection;
  bankUserSd: BankNodeConnection;
  buyerTransactionSd: TransactionNodeConnection;
  commentSet: CommentNodeConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdLiveAuctions: Array<LiveAuctionType>;
  creditCardUserSd: CreditCardNodeConnection;
  deleted: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  evaluation: Scalars['Decimal']['output'];
  favoriteSet: FavoriteNodeConnection;
  fcmdeviceSet: FcmDeviceNodeConnection;
  followers: Array<BuyerType>;
  followersSet: FollowingNodeConnection;
  following: Array<BuyerType>;
  followingSet: FollowingNodeConnection;
  /** Los grupos a los que pertenece este usuario. Un usuario tendrá todos los permisos asignados a cada uno de sus grupos. */
  groups: Array<GroupType>;
  id: Scalars['String']['output'];
  idAccount?: Maybe<Scalars['String']['output']>;
  idCustomer?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isGoogle: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  isSuperuser: Scalars['Boolean']['output'];
  jsonAccount?: Maybe<Scalars['JSONString']['output']>;
  jsonCustomer?: Maybe<Scalars['JSONString']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  likeSet: Array<LikeNode>;
  likedProducts: Array<ProductType>;
  liveAuctions: Array<LiveAuctionType>;
  name?: Maybe<Scalars['String']['output']>;
  notificationSet: NotificationNodeConnection;
  orderSet: OrderNodeConnection;
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  productSet: Array<ProductType>;
  profilePhoto?: Maybe<PhotoUserSystemNode>;
  sellerTransactionSd: TransactionNodeConnection;
  tokenappSet: TokenAppNodeConnection;
  transactionpromotionproductSet: TransactionPromotionProductNodeConnection;
  /** Permisos específicos para este usuario. */
  userPermissions: Array<PermissionType>;
  userReceiptStreamDealer: MessageNodeConnection;
  userSendStreamDealer: MessageNodeConnection;
  username?: Maybe<Scalars['String']['output']>;
};


export type BuyerTypeActionsystemSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeAddressSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_Istartswith?: InputMaybe<Scalars['String']['input']>;
  codeZip?: InputMaybe<Scalars['String']['input']>;
  codeZip_Icontains?: InputMaybe<Scalars['String']['input']>;
  codeZip_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Id?: InputMaybe<Scalars['ID']['input']>;
  country_Iso2?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Iso3?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Name?: InputMaybe<Scalars['String']['input']>;
  country_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nom?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nombre?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Icontains?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Deleted?: InputMaybe<Scalars['Boolean']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeBankUserSdArgs = {
  accountNumber?: InputMaybe<Scalars['BigInt']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAccount?: InputMaybe<Scalars['String']['input']>;
  nameAccount_Icontains?: InputMaybe<Scalars['String']['input']>;
  nameAccount_Istartswith?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  routingNumber?: InputMaybe<Scalars['BigInt']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeBuyerTransactionSdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};


export type BuyerTypeCommentSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  client_Email?: InputMaybe<Scalars['String']['input']>;
  client_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Id?: InputMaybe<Scalars['String']['input']>;
  client_Name?: InputMaybe<Scalars['String']['input']>;
  client_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Phone?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeCreditCardUserSdArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cardType?: InputMaybe<PaymentsCreditCardCardTypeChoices>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  cvv?: InputMaybe<Scalars['String']['input']>;
  cvv_Icontains?: InputMaybe<Scalars['String']['input']>;
  cvv_Istartswith?: InputMaybe<Scalars['String']['input']>;
  dueDateMonth?: InputMaybe<Scalars['Int']['input']>;
  dueDateYear?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeFavoriteSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeFcmdeviceSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  registrationId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FcmDjangoFcmDeviceTypeChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeFollowersSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyerTypeFollowingSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyerTypeNotificationSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeOrderSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cantProduct?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gte?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceEstimatedTaxToBeCollected?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gte?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lte?: InputMaybe<Scalars['Date']['input']>;
  statusPayment?: InputMaybe<CoreOrderStatusPaymentChoices>;
  userBuyer_Email?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Id?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeSellerTransactionSdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};


export type BuyerTypeTokenappSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_Icontains?: InputMaybe<Scalars['String']['input']>;
  token_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeTransactionpromotionproductSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Category_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Category_Name?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Qualification?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_State_Id?: InputMaybe<Scalars['ID']['input']>;
  product_State_Name?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Duration?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Itempromotion_Product_Description?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Price?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_TypeDuration?: InputMaybe<CorePromotionTypeDurationChoices>;
  statusPayment?: InputMaybe<PaymentsTransactionPromotionProductStatusPaymentChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Phone?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeUserReceiptStreamDealerArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_Icontains?: InputMaybe<Scalars['String']['input']>;
  subject_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Id?: InputMaybe<Scalars['String']['input']>;
  userSend_Email?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userSend_Id?: InputMaybe<Scalars['String']['input']>;
};


export type BuyerTypeUserSendStreamDealerArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_Icontains?: InputMaybe<Scalars['String']['input']>;
  subject_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Id?: InputMaybe<Scalars['String']['input']>;
  userSend_Email?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userSend_Id?: InputMaybe<Scalars['String']['input']>;
};

export type CardType = {
  __typename?: 'CardType';
  color?: Maybe<Scalars['String']['output']>;
  earn?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  percent?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type CategoryProductNode = Node & {
  __typename?: 'CategoryProductNode';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isTarjet: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  productSet: Array<ProductType>;
  subcategorySet: SubCategoryNodeConnection;
};


export type CategoryProductNodeSubcategorySetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category_Id?: InputMaybe<Scalars['ID']['input']>;
  category_Name?: InputMaybe<Scalars['String']['input']>;
  category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryProductNodeConnection = {
  __typename?: 'CategoryProductNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CategoryProductNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CategoryProductNode` and its cursor. */
export type CategoryProductNodeEdge = {
  __typename?: 'CategoryProductNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CategoryProductNode>;
};

export type ChangePassword = {
  __typename?: 'ChangePassword';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type ChangePasswordApp = {
  __typename?: 'ChangePasswordApp';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type ChangePasswordModel = {
  password: Scalars['String']['input'];
};

export type ChangeStateCategoryProductMutation = {
  __typename?: 'ChangeStateCategoryProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CategoryProductNode>;
};

export type ChangeStateCityMutation = {
  __typename?: 'ChangeStateCityMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CityNode>;
};

export type ChangeStateConditionMutation = {
  __typename?: 'ChangeStateConditionMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ConditionNode>;
};

export type ChangeStateProductMutation = {
  __typename?: 'ChangeStateProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ProductNode>;
};

export type ChangeStatePromotionMutation = {
  __typename?: 'ChangeStatePromotionMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<PromotionNode>;
};

export type ChangeStateStateMutation = {
  __typename?: 'ChangeStateStateMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<StateNode>;
};

export type ChangeStateStateProductMutation = {
  __typename?: 'ChangeStateStateProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<StateProductNode>;
};

export type ChangeStateSubcategoryMutation = {
  __typename?: 'ChangeStateSubcategoryMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<SubCategoryNode>;
};

export type ChangeStateTaxMutation = {
  __typename?: 'ChangeStateTaxMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<TaxNode>;
};

export type ChangeStateUser = {
  __typename?: 'ChangeStateUser';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type ChangeStateZipCodeMutation = {
  __typename?: 'ChangeStateZipCodeMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ZipCodeNode>;
};

export type ChartDataType = {
  __typename?: 'ChartDataType';
  options?: Maybe<ChartOptionsType>;
  series?: Maybe<Array<Maybe<SeriesType>>>;
};

export type ChartOptionsType = {
  __typename?: 'ChartOptionsType';
  chartType?: Maybe<Scalars['String']['output']>;
  colors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  dataLabelsEnabled?: Maybe<Scalars['Boolean']['output']>;
  fillType?: Maybe<Scalars['String']['output']>;
  fontFamily?: Maybe<Scalars['String']['output']>;
  foreColor?: Maybe<Scalars['String']['output']>;
  gradient?: Maybe<GradientType>;
  gridBordercolor?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  legendShow?: Maybe<Scalars['Boolean']['output']>;
  strokeCurve?: Maybe<Scalars['String']['output']>;
  strokeWidth?: Maybe<Scalars['Int']['output']>;
  toolbar?: Maybe<Scalars['Boolean']['output']>;
  tooltipTheme?: Maybe<Scalars['String']['output']>;
  xaxisAxisborderColor?: Maybe<Scalars['String']['output']>;
  xaxisAxisborderShow?: Maybe<Scalars['Boolean']['output']>;
  xaxisAxisticksColor?: Maybe<Scalars['String']['output']>;
};

export type CityNode = Node & {
  __typename?: 'CityNode';
  abr: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  state: StateNode;
  taxSet: TaxNodeConnection;
};


export type CityNodeTaxSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Abr?: InputMaybe<Scalars['String']['input']>;
  city_Abr_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_Abr_Istartswith?: InputMaybe<Scalars['String']['input']>;
  city_Active?: InputMaybe<Scalars['Boolean']['input']>;
  city_Id?: InputMaybe<Scalars['ID']['input']>;
  city_Name?: InputMaybe<Scalars['String']['input']>;
  city_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  city_State_Id?: InputMaybe<Scalars['ID']['input']>;
  city_State_State?: InputMaybe<Scalars['String']['input']>;
  city_State_State_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_State_State_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  percent?: InputMaybe<Scalars['Decimal']['input']>;
  percent_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  percent_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  percent_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  percent_Lte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CityNodeConnection = {
  __typename?: 'CityNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CityNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CityNode` and its cursor. */
export type CityNodeEdge = {
  __typename?: 'CityNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CityNode>;
};

export type CommentNode = Node & {
  __typename?: 'CommentNode';
  active: Scalars['Boolean']['output'];
  client: BuyerType;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  evaluation: Scalars['Int']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  product: ProductType;
  text?: Maybe<Scalars['String']['output']>;
};

export type CommentNodeConnection = {
  __typename?: 'CommentNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CommentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CommentNode` and its cursor. */
export type CommentNodeEdge = {
  __typename?: 'CommentNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CommentNode>;
};

export type ConditionNode = Node & {
  __typename?: 'ConditionNode';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  productSet: Array<ProductType>;
};

export type ConditionNodeConnection = {
  __typename?: 'ConditionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ConditionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ConditionNode` and its cursor. */
export type ConditionNodeEdge = {
  __typename?: 'ConditionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ConditionNode>;
};

/** An enumeration. */
export enum CoreOrderStatusPaymentChoices {
  /** FOR_PAY */
  F = 'F',
  /** PENDING */
  P = 'P',
  /** PAY */
  S = 'S'
}

/** An enumeration. */
export enum CoreProductShippingMethodChoices {
  /** DHL */
  D = 'D',
  /** FedEx */
  F = 'F',
  /** UPS */
  P = 'P',
  /** RedPack */
  R = 'R',
  /** Sendex */
  S = 'S',
  /** USPS */
  U = 'U'
}

/** An enumeration. */
export enum CoreProductStatusPaymentChoices {
  /** FOR_PAY */
  F = 'F',
  /** PENDING */
  P = 'P',
  /** SUCCESS */
  S = 'S'
}

/** An enumeration. */
export enum CorePromotionTypeDurationChoices {
  /** DAY */
  D = 'D',
  /** HOUR */
  H = 'H',
  /** MONTH */
  M = 'M',
  /** WEEK */
  W = 'W',
  /** YEAR */
  Y = 'Y'
}

export type CountryNode = Node & {
  __typename?: 'CountryNode';
  active: Scalars['Boolean']['output'];
  addressSet: AddressNodeConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  iso2: Scalars['String']['output'];
  iso3: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nom: Scalars['String']['output'];
  nombre: Scalars['String']['output'];
  phoneCode: Scalars['String']['output'];
};


export type CountryNodeAddressSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_Istartswith?: InputMaybe<Scalars['String']['input']>;
  codeZip?: InputMaybe<Scalars['String']['input']>;
  codeZip_Icontains?: InputMaybe<Scalars['String']['input']>;
  codeZip_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Id?: InputMaybe<Scalars['ID']['input']>;
  country_Iso2?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Iso3?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Name?: InputMaybe<Scalars['String']['input']>;
  country_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nom?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nombre?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Icontains?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Deleted?: InputMaybe<Scalars['Boolean']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type CreatCommentSerializer = {
  evaluation: Scalars['Int']['input'];
  product: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAddressMutation = {
  __typename?: 'CreateAddressMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<AddressNode>;
};

export type CreateAddressSerializer = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  codeZip: Scalars['String']['input'];
  country: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  setDefault: Scalars['Boolean']['input'];
  stateProvinceRegion: Scalars['String']['input'];
  user?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAdmin = {
  email: Scalars['String']['input'];
  google?: InputMaybe<Scalars['Boolean']['input']>;
  group: Array<InputMaybe<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userPermissions: Array<InputMaybe<Scalars['String']['input']>>;
};

export type CreateBankMutation = {
  __typename?: 'CreateBankMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<BankNode>;
};

export type CreateBankSerializer = {
  accountNumber: Scalars['BigInt']['input'];
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nameAccount: Scalars['String']['input'];
  routingNumber: Scalars['Int']['input'];
};

export type CreateCategoryProductMutation = {
  __typename?: 'CreateCategoryProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CategoryProductNode>;
};

export type CreateCategorySerializer = {
  name: Scalars['String']['input'];
};

export type CreateCityMutation = {
  __typename?: 'CreateCityMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CityNode>;
};

export type CreateCitySerializer = {
  abr: Scalars['String']['input'];
  name: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type CreateCommentMutation = {
  __typename?: 'CreateCommentMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CommentNode>;
};

export type CreateConditionMutation = {
  __typename?: 'CreateConditionMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ConditionNode>;
};

export type CreateConditionSerializer = {
  description: Scalars['String']['input'];
};

export type CreateCountryMutation = {
  __typename?: 'CreateCountryMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CountryNode>;
};

export type CreateCountrySerializer = {
  iso2: Scalars['String']['input'];
  iso3: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nom: Scalars['String']['input'];
  nombre: Scalars['String']['input'];
  phoneCode: Scalars['String']['input'];
};

export type CreateCreditCardMutation = {
  __typename?: 'CreateCreditCardMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CreditCardNode>;
};

export type CreateCreditCardSerializer = {
  address: Scalars['String']['input'];
  cardNumber: Scalars['String']['input'];
  cardType: Scalars['String']['input'];
  cvv: Scalars['String']['input'];
  dueDateMonth: Scalars['Int']['input'];
  dueDateYear: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type CreateGroup = {
  name: Scalars['String']['input'];
  permissions: Array<InputMaybe<Scalars['String']['input']>>;
};

export type CreateGroupMutation = {
  __typename?: 'CreateGroupMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<GroupType>;
};

export type CreateLiveAuction = {
  __typename?: 'CreateLiveAuction';
  liveAuction?: Maybe<LiveAuctionType>;
};

export type CreateProductMutation = {
  __typename?: 'CreateProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ProductNode>;
};

export type CreateProductPaySerializer = {
  product: Scalars['String']['input'];
  promotion: Scalars['String']['input'];
};

export type CreateProductSerializer = {
  address?: InputMaybe<Scalars['String']['input']>;
  category: Scalars['String']['input'];
  condition: Scalars['String']['input'];
  deliveryTimesDays: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  firmOnPrice: Scalars['Boolean']['input'];
  holdForNow: Scalars['Boolean']['input'];
  photos: Array<InputMaybe<Scalars['String']['input']>>;
  price: Scalars['Float']['input'];
  quantityForSale: Scalars['Int']['input'];
  sellAndShipNationwide: Scalars['Boolean']['input'];
  shippingMethod?: InputMaybe<Scalars['String']['input']>;
  standardShippingPrice: Scalars['Float']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  subcategory?: InputMaybe<Scalars['String']['input']>;
  taxes?: InputMaybe<Scalars['String']['input']>;
  taxesIncluded: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePromotionMutation = {
  __typename?: 'CreatePromotionMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<PromotionNode>;
};

export type CreatePromotionSerializer = {
  duration: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  typeDuration: Scalars['String']['input'];
};

export type CreateStateMutation = {
  __typename?: 'CreateStateMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<StateNode>;
};

export type CreateStateProductMutation = {
  __typename?: 'CreateStateProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<StateProductNode>;
};

export type CreateStateProductSerializer = {
  color?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateStateSerializer = {
  state: Scalars['String']['input'];
};

export type CreateSubCategorySerializer = {
  category: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateSubcategoryMutation = {
  __typename?: 'CreateSubcategoryMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<SubCategoryNode>;
};

export type CreateTaxMutation = {
  __typename?: 'CreateTaxMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<TaxNode>;
};

export type CreateTaxSerializer = {
  city: Scalars['String']['input'];
  percent: Scalars['Float']['input'];
};

export type CreateTokenMutation = {
  __typename?: 'CreateTokenMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['String']['output']>;
};

export type CreateUserMutation = {
  __typename?: 'CreateUserMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<UserNode>;
};

export type CreateZipCodeMutation = {
  __typename?: 'CreateZipCodeMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ZipCodeNode>;
};

export type CreateZipCodeSerializer = {
  city: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type CreditCardNode = Node & {
  __typename?: 'CreditCardNode';
  active: Scalars['Boolean']['output'];
  address: Scalars['String']['output'];
  cardNumber: Scalars['String']['output'];
  cardType: PaymentsCreditCardCardTypeChoices;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cvv: Scalars['String']['output'];
  dueDateMonth: Scalars['Int']['output'];
  dueDateYear: Scalars['Int']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  idCardStripe?: Maybe<Scalars['String']['output']>;
  jsonCard?: Maybe<Scalars['JSONString']['output']>;
  name: Scalars['String']['output'];
  orderSet: OrderNodeConnection;
  user: BuyerType;
  zipCode: Scalars['String']['output'];
};


export type CreditCardNodeOrderSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cantProduct?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gte?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceEstimatedTaxToBeCollected?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gte?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lte?: InputMaybe<Scalars['Date']['input']>;
  statusPayment?: InputMaybe<CoreOrderStatusPaymentChoices>;
  userBuyer_Email?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Id?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type CreditCardNodeConnection = {
  __typename?: 'CreditCardNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CreditCardNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CreditCardNode` and its cursor. */
export type CreditCardNodeEdge = {
  __typename?: 'CreditCardNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CreditCardNode>;
};

export type DeleteAddressMutation = {
  __typename?: 'DeleteAddressMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteBankMutation = {
  __typename?: 'DeleteBankMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteCommentMutation = {
  __typename?: 'DeleteCommentMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CommentNode>;
};

export type DeleteCountryMutation = {
  __typename?: 'DeleteCountryMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteCreditCardMutation = {
  __typename?: 'DeleteCreditCardMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteGroupMutation = {
  __typename?: 'DeleteGroupMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<GroupType>;
};

export type DeleteImageProductMutation = {
  __typename?: 'DeleteImageProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteLiveAuction = {
  __typename?: 'DeleteLiveAuction';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteMyAccountMutation = {
  __typename?: 'DeleteMyAccountMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteProductMutation = {
  __typename?: 'DeleteProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ProductNode>;
};

export type DislikeMutation = {
  __typename?: 'DislikeMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<LikeNode>;
};

export type ErrorApplication = {
  __typename?: 'ErrorApplication';
  error: Scalars['String']['output'];
};

export type ExecuteTransferSerializer = {
  description?: InputMaybe<Scalars['String']['input']>;
  transfer: Scalars['String']['input'];
};

export type FcmDeviceInput = {
  deviceId: Scalars['String']['input'];
  registrationId: Scalars['String']['input'];
  typeDevice: Scalars['String']['input'];
};

export type FcmDeviceNode = Node & {
  __typename?: 'FCMDeviceNode';
  /** Inactive devices will not be sent notifications */
  active: Scalars['Boolean']['output'];
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** Unique device identifier */
  deviceId?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  registrationId: Scalars['String']['output'];
  type: FcmDjangoFcmDeviceTypeChoices;
  user?: Maybe<BuyerType>;
};

export type FcmDeviceNodeConnection = {
  __typename?: 'FCMDeviceNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FcmDeviceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FCMDeviceNode` and its cursor. */
export type FcmDeviceNodeEdge = {
  __typename?: 'FCMDeviceNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FcmDeviceNode>;
};

export type FavoriteNode = Node & {
  __typename?: 'FavoriteNode';
  Order: Scalars['Int']['output'];
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  product: ProductType;
  user: BuyerType;
};

export type FavoriteNodeConnection = {
  __typename?: 'FavoriteNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FavoriteNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FavoriteNode` and its cursor. */
export type FavoriteNodeEdge = {
  __typename?: 'FavoriteNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FavoriteNode>;
};

/** An enumeration. */
export enum FcmDjangoFcmDeviceTypeChoices {
  /** android */
  Android = 'ANDROID',
  /** ios */
  Ios = 'IOS',
  /** web */
  Web = 'WEB'
}

export type FollowMutation = {
  __typename?: 'FollowMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<FollowerNode>;
};

export type FollowerNode = Node & {
  __typename?: 'FollowerNode';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  follower: BuyerType;
  following: BuyerType;
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

export type FollowingNode = Node & {
  __typename?: 'FollowingNode';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  follower: BuyerType;
  following: BuyerType;
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

export type FollowingNodeConnection = {
  __typename?: 'FollowingNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FollowingNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FollowingNode` and its cursor. */
export type FollowingNodeEdge = {
  __typename?: 'FollowingNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FollowingNode>;
};

export type GradientType = {
  __typename?: 'GradientType';
  opacityFrom?: Maybe<Scalars['Float']['output']>;
  opacityTo?: Maybe<Scalars['Float']['output']>;
  shadeIntensity?: Maybe<Scalars['Float']['output']>;
  stops?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type GroupWithPermissionsType = {
  __typename?: 'GroupWithPermissionsType';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ImageProductSerializer = {
  id: Scalars['String']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type ImageUserSerializer = {
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type ItemPromotionNode = Node & {
  __typename?: 'ItemPromotionNode';
  Order: Scalars['Int']['output'];
  active: Scalars['Boolean']['output'];
  assignPromotion?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  product?: Maybe<ProductType>;
  promotion?: Maybe<PromotionNode>;
};

export type ItemPromotionNodeConnection = {
  __typename?: 'ItemPromotionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ItemPromotionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ItemPromotionNode` and its cursor. */
export type ItemPromotionNodeEdge = {
  __typename?: 'ItemPromotionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ItemPromotionNode>;
};

export type LikeMutation = {
  __typename?: 'LikeMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<LikeNode>;
};

export type LikeNode = {
  __typename?: 'LikeNode';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  product: ProductType;
  user: BuyerType;
};

export type LiveAuctionType = {
  __typename?: 'LiveAuctionType';
  buyers: Array<BuyerType>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<BuyerType>;
  id: Scalars['ID']['output'];
  isCancelled: Scalars['Boolean']['output'];
  isPublic: Scalars['Boolean']['output'];
  isRemoved: Scalars['Boolean']['output'];
  products: Array<ProductType>;
  startTime: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};

export type LocalUserDataType = {
  __typename?: 'LocalUserDataType';
  /** Correo electrónico del usuario en el sistema local */
  email?: Maybe<Scalars['String']['output']>;
  /** ID del usuario en el sistema local */
  id?: Maybe<Scalars['String']['output']>;
  /** Nombre del usuario en el sistema local */
  name?: Maybe<Scalars['String']['output']>;
};

export type MessageNode = Node & {
  __typename?: 'MessageNode';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  product?: Maybe<ProductType>;
  read: Scalars['Boolean']['output'];
  subject: Scalars['String']['output'];
  userReceipt?: Maybe<BuyerType>;
  userSend?: Maybe<BuyerType>;
};

export type MessageNodeConnection = {
  __typename?: 'MessageNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MessageNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MessageNode` and its cursor. */
export type MessageNodeEdge = {
  __typename?: 'MessageNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MessageNode>;
};

export type Mutations = {
  __typename?: 'Mutations';
  /** Active address of the user */
  activeAddress?: Maybe<ActiveAddressMutation>;
  /** Add device */
  addDevice?: Maybe<AddDevice>;
  /** Add product to promotion */
  addProductPromotion?: Maybe<AddProductPromotionMutation>;
  /** Change password user */
  changePassword?: Maybe<ChangePassword>;
  /** Change password user in the profile and application */
  changePasswordApp?: Maybe<ChangePasswordApp>;
  /** Change state category product */
  changeStateCategoryProduct?: Maybe<ChangeStateCategoryProductMutation>;
  /** Change state city */
  changeStateCity?: Maybe<ChangeStateCityMutation>;
  /** Change state condition */
  changeStateCondition?: Maybe<ChangeStateConditionMutation>;
  /** Change state product */
  changeStateProduct?: Maybe<ChangeStateProductMutation>;
  /** Change state promotion */
  changeStatePromotion?: Maybe<ChangeStatePromotionMutation>;
  /** Change state state */
  changeStateState?: Maybe<ChangeStateStateMutation>;
  /** Change state of state product */
  changeStateStateProduct?: Maybe<ChangeStateStateProductMutation>;
  /** Change state subcategory */
  changeStateSubcategory?: Maybe<ChangeStateSubcategoryMutation>;
  /** Change state tax */
  changeStateTax?: Maybe<ChangeStateTaxMutation>;
  /** Change state user */
  changeStateUser?: Maybe<ChangeStateUser>;
  /** Change state zip code */
  changeStateZipCode?: Maybe<ChangeStateZipCodeMutation>;
  /** Create address */
  createAddress?: Maybe<CreateAddressMutation>;
  /** Create bank */
  createBank?: Maybe<CreateBankMutation>;
  /** Create category product */
  createCategoryProduct?: Maybe<CreateCategoryProductMutation>;
  /** Create city */
  createCity?: Maybe<CreateCityMutation>;
  /** Create comment a product */
  createComment?: Maybe<CreateCommentMutation>;
  /** Create condition */
  createCondition?: Maybe<CreateConditionMutation>;
  /** Create country */
  createCountry?: Maybe<CreateCountryMutation>;
  /** Create credit card */
  createCreditCard?: Maybe<CreateCreditCardMutation>;
  /** Create user group */
  createGroup?: Maybe<CreateGroupMutation>;
  createLiveAuction?: Maybe<CreateLiveAuction>;
  /** Create product */
  createProduct?: Maybe<CreateProductMutation>;
  /** Create pay product */
  createProductPay?: Maybe<ProductPayPromotionMutation>;
  /** Create promotion */
  createPromotion?: Maybe<CreatePromotionMutation>;
  /** Create state */
  createState?: Maybe<CreateStateMutation>;
  /** Create state product */
  createStateProduct?: Maybe<CreateStateProductMutation>;
  /** Create subcategory */
  createSubcategory?: Maybe<CreateSubcategoryMutation>;
  /** Create tax */
  createTax?: Maybe<CreateTaxMutation>;
  /** Create Token for application */
  createToken?: Maybe<CreateTokenMutation>;
  /** Create User */
  createUser?: Maybe<CreateUserMutation>;
  /** Create zip code */
  createZipCode?: Maybe<CreateZipCodeMutation>;
  /** Delete address of the user */
  deleteAddress?: Maybe<DeleteAddressMutation>;
  /** Delete bank */
  deleteBank?: Maybe<DeleteBankMutation>;
  /** Delete comment a product */
  deleteComment?: Maybe<DeleteCommentMutation>;
  /** Delete country */
  deleteCountry?: Maybe<DeleteCountryMutation>;
  /** Delete credit card */
  deleteCreditCard?: Maybe<DeleteCreditCardMutation>;
  /** Delete user group */
  deleteGroup?: Maybe<DeleteGroupMutation>;
  /** Delete image product */
  deleteImageProduct?: Maybe<DeleteImageProductMutation>;
  deleteLiveAuction?: Maybe<DeleteLiveAuction>;
  /** Delete my account */
  deleteMyAccount?: Maybe<DeleteMyAccountMutation>;
  /** Delete product */
  deleteProduct?: Maybe<DeleteProductMutation>;
  /** Follow user */
  followUser?: Maybe<FollowMutation>;
  /** Like product */
  likeProduct?: Maybe<LikeMutation>;
  /** Pay buyer */
  payBuyer?: Maybe<PayBuyerMutation>;
  /** Pay order product */
  payOrder?: Maybe<PayOrderMutation>;
  /** Remove product to promotion */
  removeProductPromotion?: Maybe<RemoveProductPromotionMutation>;
  /** Unfollow user */
  unfollowUser?: Maybe<UnfollowMutation>;
  /** Unlike a product */
  unlikeProduct?: Maybe<DislikeMutation>;
  /** Update address */
  updateAddress?: Maybe<UpdateAddressMutation>;
  /** Update bank */
  updateBank?: Maybe<UpdateBankMutation>;
  /** Update category product */
  updateCategoryProduct?: Maybe<UpdateCategoryProductMutation>;
  /** Update city */
  updateCity?: Maybe<UpdateCityMutation>;
  /** Update comment a product */
  updateComment?: Maybe<UpdateCommentMutation>;
  /** Update condition */
  updateCondition?: Maybe<UpdateConditionMutation>;
  /** Update condition */
  updateConditionProduct?: Maybe<UpdateConditionMutation>;
  /** Update Country */
  updateCountry?: Maybe<UpdateCountryMutation>;
  /** Update credit card */
  updateCreditCard?: Maybe<UpdateCreditCardMutation>;
  /** Update email of user */
  updateEmail?: Maybe<UpdateEmailMutation>;
  /** Update user group */
  updateGroup?: Maybe<UpdateGroupMutation>;
  updateLiveAuction?: Maybe<UpdateLiveAuction>;
  /** Update name of user */
  updateName?: Maybe<UpdateNameMutation>;
  /** Update phone of user */
  updatePhone?: Maybe<UpdatePhoneMutation>;
  /** Update product */
  updateProduct?: Maybe<UpdateProductMutation>;
  /** Update promotion */
  updatePromotion?: Maybe<UpdatePromotionMutation>;
  /** Update state */
  updateState?: Maybe<UpdateStateMutation>;
  /** Update state product */
  updateStateProduct?: Maybe<UpdateStateProductMutation>;
  /** Update subcategory */
  updateSubcategory?: Maybe<UpdateSubcategoryMutation>;
  /** Update tax */
  updateTax?: Maybe<UpdateTaxMutation>;
  /** Update user */
  updateUser?: Maybe<UpdateUserMutation>;
  /** Update username */
  updateUsername?: Maybe<UpdateUsernameMutation>;
  /** Update zip code */
  updateZipCode?: Maybe<UpdateZipCodeMutation>;
  /** Upload image product */
  uploadImageProduct?: Maybe<UploadImageProductMutation>;
  /** Upload image user */
  uploadImageUser?: Maybe<UploadImageUserMutation>;
};


export type MutationsActiveAddressArgs = {
  id: Scalars['String']['input'];
};


export type MutationsAddDeviceArgs = {
  obj?: InputMaybe<FcmDeviceInput>;
};


export type MutationsAddProductPromotionArgs = {
  obj?: InputMaybe<ProductPromotionSerializer>;
};


export type MutationsChangePasswordArgs = {
  user?: InputMaybe<ChangePasswordModel>;
};


export type MutationsChangePasswordAppArgs = {
  user?: InputMaybe<ChangePasswordModel>;
};


export type MutationsChangeStateCategoryProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStateCityArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStateConditionArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStateProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStatePromotionArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStateStateArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStateStateProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStateSubcategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStateTaxArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStateUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationsChangeStateZipCodeArgs = {
  id: Scalars['String']['input'];
};


export type MutationsCreateAddressArgs = {
  obj?: InputMaybe<CreateAddressSerializer>;
};


export type MutationsCreateBankArgs = {
  obj?: InputMaybe<CreateBankSerializer>;
};


export type MutationsCreateCategoryProductArgs = {
  obj?: InputMaybe<CreateCategorySerializer>;
};


export type MutationsCreateCityArgs = {
  obj?: InputMaybe<CreateCitySerializer>;
};


export type MutationsCreateCommentArgs = {
  obj?: InputMaybe<CreatCommentSerializer>;
};


export type MutationsCreateConditionArgs = {
  obj?: InputMaybe<CreateConditionSerializer>;
};


export type MutationsCreateCountryArgs = {
  obj?: InputMaybe<CreateCountrySerializer>;
};


export type MutationsCreateCreditCardArgs = {
  obj?: InputMaybe<CreateCreditCardSerializer>;
};


export type MutationsCreateGroupArgs = {
  group?: InputMaybe<CreateGroup>;
};


export type MutationsCreateLiveAuctionArgs = {
  buyerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isPublic: Scalars['Boolean']['input'];
  productIds: Array<InputMaybe<Scalars['ID']['input']>>;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};


export type MutationsCreateProductArgs = {
  obj?: InputMaybe<CreateProductSerializer>;
};


export type MutationsCreateProductPayArgs = {
  obj?: InputMaybe<CreateProductPaySerializer>;
};


export type MutationsCreatePromotionArgs = {
  obj?: InputMaybe<CreatePromotionSerializer>;
};


export type MutationsCreateStateArgs = {
  obj?: InputMaybe<CreateStateSerializer>;
};


export type MutationsCreateStateProductArgs = {
  obj?: InputMaybe<CreateStateProductSerializer>;
};


export type MutationsCreateSubcategoryArgs = {
  obj?: InputMaybe<CreateSubCategorySerializer>;
};


export type MutationsCreateTaxArgs = {
  obj?: InputMaybe<CreateTaxSerializer>;
};


export type MutationsCreateTokenArgs = {
  id: Scalars['String']['input'];
};


export type MutationsCreateUserArgs = {
  user?: InputMaybe<CreateAdmin>;
};


export type MutationsCreateZipCodeArgs = {
  obj?: InputMaybe<CreateZipCodeSerializer>;
};


export type MutationsDeleteAddressArgs = {
  id: Scalars['String']['input'];
};


export type MutationsDeleteBankArgs = {
  id: Scalars['String']['input'];
};


export type MutationsDeleteCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationsDeleteCountryArgs = {
  id: Scalars['String']['input'];
};


export type MutationsDeleteCreditCardArgs = {
  id: Scalars['String']['input'];
};


export type MutationsDeleteGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsDeleteImageProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationsDeleteLiveAuctionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeleteProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationsFollowUserArgs = {
  user: Scalars['String']['input'];
};


export type MutationsLikeProductArgs = {
  productId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationsPayBuyerArgs = {
  obj?: InputMaybe<ExecuteTransferSerializer>;
};


export type MutationsPayOrderArgs = {
  obj?: InputMaybe<PayOrderSerializer>;
};


export type MutationsRemoveProductPromotionArgs = {
  product: Scalars['String']['input'];
};


export type MutationsUnfollowUserArgs = {
  user: Scalars['String']['input'];
};


export type MutationsUnlikeProductArgs = {
  productId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationsUpdateAddressArgs = {
  obj?: InputMaybe<UpdateAddressSerializer>;
};


export type MutationsUpdateBankArgs = {
  obj?: InputMaybe<UpdateBankSerializer>;
};


export type MutationsUpdateCategoryProductArgs = {
  obj?: InputMaybe<UpdateCategorySerializer>;
};


export type MutationsUpdateCityArgs = {
  obj?: InputMaybe<UpdateCitySerializer>;
};


export type MutationsUpdateCommentArgs = {
  obj?: InputMaybe<UpdateCommentSerializer>;
};


export type MutationsUpdateConditionArgs = {
  obj?: InputMaybe<UpdateConditionSerializer>;
};


export type MutationsUpdateConditionProductArgs = {
  obj?: InputMaybe<UpdateConditionSerializer>;
};


export type MutationsUpdateCountryArgs = {
  obj?: InputMaybe<UpdateCountrySerializer>;
};


export type MutationsUpdateCreditCardArgs = {
  obj?: InputMaybe<UpdateCreditCardSerializer>;
};


export type MutationsUpdateEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationsUpdateGroupArgs = {
  group?: InputMaybe<UpdateGroup>;
};


export type MutationsUpdateLiveAuctionArgs = {
  buyerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
  isCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateNameArgs = {
  name: Scalars['String']['input'];
};


export type MutationsUpdatePhoneArgs = {
  phone: Scalars['String']['input'];
};


export type MutationsUpdateProductArgs = {
  obj?: InputMaybe<UpdateProductSerializer>;
};


export type MutationsUpdatePromotionArgs = {
  obj?: InputMaybe<UpdatePromotionSerializer>;
};


export type MutationsUpdateStateArgs = {
  obj?: InputMaybe<UpdateStateSerializer>;
};


export type MutationsUpdateStateProductArgs = {
  obj?: InputMaybe<UpdateStateProductSerializer>;
};


export type MutationsUpdateSubcategoryArgs = {
  obj?: InputMaybe<UpdateSubCategorySerializer>;
};


export type MutationsUpdateTaxArgs = {
  obj?: InputMaybe<UpdateTaxSerializer>;
};


export type MutationsUpdateUserArgs = {
  user?: InputMaybe<UpdateAdmin>;
};


export type MutationsUpdateUsernameArgs = {
  username: Scalars['String']['input'];
};


export type MutationsUpdateZipCodeArgs = {
  obj?: InputMaybe<UpdateZipCodeSerializer>;
};


export type MutationsUploadImageProductArgs = {
  obj?: InputMaybe<ImageProductSerializer>;
};


export type MutationsUploadImageUserArgs = {
  obj?: InputMaybe<ImageUserSerializer>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

export type NotificationNode = Node & {
  __typename?: 'NotificationNode';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  user: BuyerType;
};

export type NotificationNodeConnection = {
  __typename?: 'NotificationNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NotificationNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `NotificationNode` and its cursor. */
export type NotificationNodeEdge = {
  __typename?: 'NotificationNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<NotificationNode>;
};

export type OrderNode = Node & {
  __typename?: 'OrderNode';
  active: Scalars['Boolean']['output'];
  address: AddressNode;
  cantProduct: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  payment: CreditCardNode;
  priceEstimatedTaxToBeCollected: Scalars['Decimal']['output'];
  priceItems: Scalars['Decimal']['output'];
  priceOrderTotal: Scalars['Decimal']['output'];
  priceShippingHading: Scalars['Decimal']['output'];
  priceTotalBeforeTax: Scalars['Decimal']['output'];
  product: ProductType;
  shipping: Scalars['Date']['output'];
  statusPayment: CoreOrderStatusPaymentChoices;
  transactionSet: TransactionNodeConnection;
  userBuyer: BuyerType;
};


export type OrderNodeTransactionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};

export type OrderNodeConnection = {
  __typename?: 'OrderNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `OrderNode` and its cursor. */
export type OrderNodeEdge = {
  __typename?: 'OrderNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<OrderNode>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedStripeTransactions = {
  __typename?: 'PaginatedStripeTransactions';
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<Scalars['String']['output']>;
  transactions?: Maybe<Array<Maybe<StripeTransactionType>>>;
};

export type PayBuyerMutation = {
  __typename?: 'PayBuyerMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<TransferNode>;
};

export type PayOrderMutation = {
  __typename?: 'PayOrderMutation';
  error?: Maybe<ErrorApplication>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PayOrderSerializer = {
  address: Scalars['String']['input'];
  cantProduct: Scalars['Int']['input'];
  payment: Scalars['String']['input'];
  priceEstimatedTaxToBeCollected: Scalars['Decimal']['input'];
  priceItems: Scalars['Decimal']['input'];
  priceOrderTotal: Scalars['Decimal']['input'];
  priceShippingHading: Scalars['Decimal']['input'];
  priceTotalBeforeTax: Scalars['Decimal']['input'];
  product: Scalars['String']['input'];
  shipping: Scalars['String']['input'];
};

/** An enumeration. */
export enum PaymentsCreditCardCardTypeChoices {
  /** MASTERCARD */
  M = 'M',
  /** VISA */
  V = 'V'
}

/** An enumeration. */
export enum PaymentsTransactionPromotionProductStatusPaymentChoices {
  /** FOR_PAY */
  F = 'F',
  /** PENDING */
  P = 'P',
  /** SUCCESS */
  S = 'S'
}

/** An enumeration. */
export enum PaymentsTransactionStatusTransactionChoices {
  /** FOR_PAY */
  F = 'F',
  /** PENDING */
  P = 'P',
  /** PAY */
  S = 'S'
}

/** An enumeration. */
export enum PaymentsTransferStatusTransactionChoices {
  /** PENDING */
  P = 'P',
  /** SUCCESS */
  S = 'S'
}

/** An enumeration. */
export enum PaymentsTransferTypeTransferChoices {
  /** PAY */
  P = 'P',
  /** REJECT */
  R = 'R'
}

export type PermissionType = {
  __typename?: 'PermissionType';
  codename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PhotoSystemNode = Node & {
  __typename?: 'PhotoSystemNode';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Designates the primary photo for the product. */
  isPrimary: Scalars['Boolean']['output'];
  product: ProductType;
  url: Scalars['String']['output'];
};

export type PhotoSystemNodeConnection = {
  __typename?: 'PhotoSystemNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PhotoSystemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PhotoSystemNode` and its cursor. */
export type PhotoSystemNodeEdge = {
  __typename?: 'PhotoSystemNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PhotoSystemNode>;
};

export type PhotoUserSystemNode = Node & {
  __typename?: 'PhotoUserSystemNode';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  user: BuyerType;
};

export type ProductNode = Node & {
  __typename?: 'ProductNode';
  Order: Scalars['Int']['output'];
  active: Scalars['Boolean']['output'];
  address?: Maybe<Scalars['String']['output']>;
  category: CategoryProductNode;
  commentSet: CommentNodeConnection;
  condition: ConditionNode;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted: Scalars['Boolean']['output'];
  deliveryTimesDays: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  favoriteSet: FavoriteNodeConnection;
  firmOnPrice: Scalars['Boolean']['output'];
  holdForNow: Scalars['Boolean']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  itempromotion?: Maybe<ItemPromotionNode>;
  likeSet: Array<LikeNode>;
  likes: Array<BuyerType>;
  liveAuctions: Array<LiveAuctionType>;
  orderSet: OrderNodeConnection;
  photos: PhotoSystemNodeConnection;
  price: Scalars['Float']['output'];
  qualification: Scalars['Decimal']['output'];
  quantityForSale: Scalars['Int']['output'];
  sellAndShipNationwide: Scalars['Boolean']['output'];
  shippingMethod?: Maybe<CoreProductShippingMethodChoices>;
  standardShippingPrice: Scalars['Float']['output'];
  state?: Maybe<StateProductNode>;
  statusPayment?: Maybe<CoreProductStatusPaymentChoices>;
  subcategory?: Maybe<SubCategoryNode>;
  taxes?: Maybe<TaxNode>;
  taxesIncluded: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  transactionSet: TransactionNodeConnection;
  transactionpromotionproductSet: TransactionPromotionProductNodeConnection;
  user?: Maybe<BuyerType>;
  zipCode?: Maybe<Scalars['String']['output']>;
};


export type ProductNodeCommentSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  client_Email?: InputMaybe<Scalars['String']['input']>;
  client_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Id?: InputMaybe<Scalars['String']['input']>;
  client_Name?: InputMaybe<Scalars['String']['input']>;
  client_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Phone?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type ProductNodeFavoriteSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type ProductNodeOrderSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cantProduct?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gte?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceEstimatedTaxToBeCollected?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gte?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lte?: InputMaybe<Scalars['Date']['input']>;
  statusPayment?: InputMaybe<CoreOrderStatusPaymentChoices>;
  userBuyer_Email?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Id?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type ProductNodePhotosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductNodeTransactionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};


export type ProductNodeTransactionpromotionproductSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Category_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Category_Name?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Qualification?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_State_Id?: InputMaybe<Scalars['ID']['input']>;
  product_State_Name?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Duration?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Itempromotion_Product_Description?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Price?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_TypeDuration?: InputMaybe<CorePromotionTypeDurationChoices>;
  statusPayment?: InputMaybe<PaymentsTransactionPromotionProductStatusPaymentChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Phone?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type ProductNodeConnection = {
  __typename?: 'ProductNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProductNode` and its cursor. */
export type ProductNodeEdge = {
  __typename?: 'ProductNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProductNode>;
};

export type ProductPayPromotionMutation = {
  __typename?: 'ProductPayPromotionMutation';
  error?: Maybe<ErrorApplication>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ProductPromotionSerializer = {
  product: Scalars['String']['input'];
  promotion: Scalars['String']['input'];
};

export type ProductType = {
  __typename?: 'ProductType';
  Order: Scalars['Int']['output'];
  active: Scalars['Boolean']['output'];
  address?: Maybe<Scalars['String']['output']>;
  category: CategoryProductNode;
  commentSet: CommentNodeConnection;
  condition: ConditionNode;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted: Scalars['Boolean']['output'];
  deliveryTimesDays: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  favoriteSet: FavoriteNodeConnection;
  firmOnPrice: Scalars['Boolean']['output'];
  holdForNow: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  itempromotion?: Maybe<ItemPromotionNode>;
  likeSet: Array<LikeNode>;
  likes: Array<BuyerType>;
  liveAuctions: Array<LiveAuctionType>;
  messageSet: MessageNodeConnection;
  orderSet: OrderNodeConnection;
  photos: PhotoSystemNodeConnection;
  price: Scalars['Float']['output'];
  qualification: Scalars['Decimal']['output'];
  quantityForSale: Scalars['Int']['output'];
  sellAndShipNationwide: Scalars['Boolean']['output'];
  shippingMethod?: Maybe<CoreProductShippingMethodChoices>;
  standardShippingPrice: Scalars['Float']['output'];
  state?: Maybe<StateProductNode>;
  statusPayment?: Maybe<CoreProductStatusPaymentChoices>;
  subcategory?: Maybe<SubCategoryNode>;
  taxes?: Maybe<TaxNode>;
  taxesIncluded: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  transactionSet: TransactionNodeConnection;
  transactionpromotionproductSet: TransactionPromotionProductNodeConnection;
  user?: Maybe<BuyerType>;
  zipCode?: Maybe<Scalars['String']['output']>;
};


export type ProductTypeCommentSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  client_Email?: InputMaybe<Scalars['String']['input']>;
  client_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Id?: InputMaybe<Scalars['String']['input']>;
  client_Name?: InputMaybe<Scalars['String']['input']>;
  client_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Phone?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type ProductTypeFavoriteSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type ProductTypeMessageSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_Icontains?: InputMaybe<Scalars['String']['input']>;
  subject_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Id?: InputMaybe<Scalars['String']['input']>;
  userSend_Email?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userSend_Id?: InputMaybe<Scalars['String']['input']>;
};


export type ProductTypeOrderSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cantProduct?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gte?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceEstimatedTaxToBeCollected?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gte?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lte?: InputMaybe<Scalars['Date']['input']>;
  statusPayment?: InputMaybe<CoreOrderStatusPaymentChoices>;
  userBuyer_Email?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Id?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type ProductTypePhotosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductTypeTransactionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};


export type ProductTypeTransactionpromotionproductSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Category_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Category_Name?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Qualification?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_State_Id?: InputMaybe<Scalars['ID']['input']>;
  product_State_Name?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Duration?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Itempromotion_Product_Description?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Price?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_TypeDuration?: InputMaybe<CorePromotionTypeDurationChoices>;
  statusPayment?: InputMaybe<PaymentsTransactionPromotionProductStatusPaymentChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Phone?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type PromotionNode = Node & {
  __typename?: 'PromotionNode';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  duration: Scalars['Int']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  itempromotionSet: ItemPromotionNodeConnection;
  name?: Maybe<Scalars['String']['output']>;
  price: Scalars['Decimal']['output'];
  transactionpromotionproductSet: TransactionPromotionProductNodeConnection;
  typeDuration: CorePromotionTypeDurationChoices;
};


export type PromotionNodeItempromotionSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Id?: InputMaybe<Scalars['ID']['input']>;
  promotion_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type PromotionNodeTransactionpromotionproductSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Category_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Category_Name?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Qualification?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_State_Id?: InputMaybe<Scalars['ID']['input']>;
  product_State_Name?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Duration?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Itempromotion_Product_Description?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Price?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_TypeDuration?: InputMaybe<CorePromotionTypeDurationChoices>;
  statusPayment?: InputMaybe<PaymentsTransactionPromotionProductStatusPaymentChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Phone?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type PromotionNodeConnection = {
  __typename?: 'PromotionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PromotionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PromotionNode` and its cursor. */
export type PromotionNodeEdge = {
  __typename?: 'PromotionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PromotionNode>;
};

export type Queries = {
  __typename?: 'Queries';
  allGroups?: Maybe<Array<Maybe<GroupWithPermissionsType>>>;
  allLiveAuctions?: Maybe<Array<Maybe<LiveAuctionType>>>;
  allPermissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cards?: Maybe<Array<Maybe<CardType>>>;
  chart1?: Maybe<ChartDataType>;
  chart2?: Maybe<ChartDataType>;
  getSalesData?: Maybe<SalesData>;
  infoUserTab?: Maybe<UserInfoCurrent>;
  productId?: Maybe<ProductNode>;
  recommendedProducts?: Maybe<ProductNodeConnection>;
  searchActions?: Maybe<ActionSystemNodeConnection>;
  searchAddressClientBuyer?: Maybe<AddressNodeConnection>;
  searchBanks?: Maybe<BankNodeConnection>;
  searchBoostedProduct?: Maybe<ProductNodeConnection>;
  searchCategoryProduct?: Maybe<CategoryProductNodeConnection>;
  searchCity?: Maybe<CityNodeConnection>;
  searchComment?: Maybe<CommentNodeConnection>;
  searchConditions?: Maybe<ConditionNodeConnection>;
  searchCountry?: Maybe<Array<Maybe<CountryNode>>>;
  searchCreditsCard?: Maybe<CreditCardNodeConnection>;
  searchFavoriteProduct?: Maybe<ProductNodeConnection>;
  searchFavorites?: Maybe<FavoriteNodeConnection>;
  searchFollower?: Maybe<UserNodeConnection>;
  searchFollowing?: Maybe<UserNodeConnection>;
  searchItemPromotion?: Maybe<ItemPromotionNodeConnection>;
  searchMessage?: Maybe<MessageNodeConnection>;
  searchMostPopularProduct?: Maybe<ProductNodeConnection>;
  searchNotification?: Maybe<NotificationNodeConnection>;
  searchOrders?: Maybe<OrderNodeConnection>;
  searchPhotoSystem?: Maybe<PhotoSystemNodeConnection>;
  searchProduct?: Maybe<ProductNodeConnection>;
  searchPromotion?: Maybe<PromotionNodeConnection>;
  searchState?: Maybe<StateNodeConnection>;
  searchStateProduct?: Maybe<StateProductNodeConnection>;
  searchSubcategory?: Maybe<SubCategoryNodeConnection>;
  searchTax?: Maybe<TaxNodeConnection>;
  searchTokens?: Maybe<TokenAppNodeConnection>;
  searchTransactionPromotionProduct?: Maybe<TransactionPromotionProductNodeConnection>;
  searchTransactions?: Maybe<TransactionNodeConnection>;
  searchTransfer?: Maybe<TransactionPromotionProductNodeConnection>;
  searchTransferAdmin?: Maybe<TransferNodeConnection>;
  searchUsers?: Maybe<UserNodeConnection>;
  searchZipCode?: Maybe<ZipCodeNodeConnection>;
  stripeTransactions?: Maybe<PaginatedStripeTransactions>;
};


export type QueriesAllGroupsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesProductIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueriesRecommendedProductsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category_Id?: InputMaybe<Scalars['ID']['input']>;
  category_Name?: InputMaybe<Scalars['String']['input']>;
  category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Description?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Id?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deliveryTimesDays?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gte?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lte?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  firmOnPrice?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  holdForNow?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_Gt?: InputMaybe<Scalars['Float']['input']>;
  price_Gte?: InputMaybe<Scalars['Float']['input']>;
  price_Lt?: InputMaybe<Scalars['Float']['input']>;
  price_Lte?: InputMaybe<Scalars['Float']['input']>;
  qualification?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  quantityForSale?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gte?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lte?: InputMaybe<Scalars['Int']['input']>;
  sellAndShipNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  shippingMethod?: InputMaybe<CoreProductShippingMethodChoices>;
  standardShippingPrice?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gte?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lte?: InputMaybe<Scalars['Float']['input']>;
  state_Id?: InputMaybe<Scalars['ID']['input']>;
  state_Name?: InputMaybe<Scalars['String']['input']>;
  state_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  state_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxesIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  taxes_City_Abr?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_City_Name?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_Percent?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchAddressClientBuyerArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_Istartswith?: InputMaybe<Scalars['String']['input']>;
  codeZip?: InputMaybe<Scalars['String']['input']>;
  codeZip_Icontains?: InputMaybe<Scalars['String']['input']>;
  codeZip_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Id?: InputMaybe<Scalars['ID']['input']>;
  country_Iso2?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Iso3?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Name?: InputMaybe<Scalars['String']['input']>;
  country_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nom?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nombre?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Icontains?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Deleted?: InputMaybe<Scalars['Boolean']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchBanksArgs = {
  accountNumber?: InputMaybe<Scalars['BigInt']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAccount?: InputMaybe<Scalars['String']['input']>;
  nameAccount_Icontains?: InputMaybe<Scalars['String']['input']>;
  nameAccount_Istartswith?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  routingNumber?: InputMaybe<Scalars['BigInt']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchBoostedProductArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category_Id?: InputMaybe<Scalars['ID']['input']>;
  category_Name?: InputMaybe<Scalars['String']['input']>;
  category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Description?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Id?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deliveryTimesDays?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gte?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lte?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  firmOnPrice?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  holdForNow?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_Gt?: InputMaybe<Scalars['Float']['input']>;
  price_Gte?: InputMaybe<Scalars['Float']['input']>;
  price_Lt?: InputMaybe<Scalars['Float']['input']>;
  price_Lte?: InputMaybe<Scalars['Float']['input']>;
  qualification?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  quantityForSale?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gte?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lte?: InputMaybe<Scalars['Int']['input']>;
  sellAndShipNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  shippingMethod?: InputMaybe<CoreProductShippingMethodChoices>;
  standardShippingPrice?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gte?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lte?: InputMaybe<Scalars['Float']['input']>;
  state_Id?: InputMaybe<Scalars['ID']['input']>;
  state_Name?: InputMaybe<Scalars['String']['input']>;
  state_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  state_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxesIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  taxes_City_Abr?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_City_Name?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_Percent?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchCategoryProductArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isTarjet?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesSearchCityArgs = {
  abr?: InputMaybe<Scalars['String']['input']>;
  abr_Icontains?: InputMaybe<Scalars['String']['input']>;
  abr_Istartswith?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  state_Id?: InputMaybe<Scalars['ID']['input']>;
  state_Isnull?: InputMaybe<Scalars['Boolean']['input']>;
  state_State?: InputMaybe<Scalars['String']['input']>;
  state_State_Icontains?: InputMaybe<Scalars['String']['input']>;
  state_State_Istartswith?: InputMaybe<Scalars['String']['input']>;
  tax_Isnull?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueriesSearchCommentArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  client_Email?: InputMaybe<Scalars['String']['input']>;
  client_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Id?: InputMaybe<Scalars['String']['input']>;
  client_Name?: InputMaybe<Scalars['String']['input']>;
  client_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Phone?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchConditionsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesSearchCreditsCardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cardType?: InputMaybe<PaymentsCreditCardCardTypeChoices>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  cvv?: InputMaybe<Scalars['String']['input']>;
  cvv_Icontains?: InputMaybe<Scalars['String']['input']>;
  cvv_Istartswith?: InputMaybe<Scalars['String']['input']>;
  dueDateMonth?: InputMaybe<Scalars['Int']['input']>;
  dueDateYear?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchFavoriteProductArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category_Id?: InputMaybe<Scalars['ID']['input']>;
  category_Name?: InputMaybe<Scalars['String']['input']>;
  category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Description?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Id?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deliveryTimesDays?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gte?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lte?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  firmOnPrice?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  holdForNow?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_Gt?: InputMaybe<Scalars['Float']['input']>;
  price_Gte?: InputMaybe<Scalars['Float']['input']>;
  price_Lt?: InputMaybe<Scalars['Float']['input']>;
  price_Lte?: InputMaybe<Scalars['Float']['input']>;
  qualification?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  quantityForSale?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gte?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lte?: InputMaybe<Scalars['Int']['input']>;
  sellAndShipNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  shippingMethod?: InputMaybe<CoreProductShippingMethodChoices>;
  standardShippingPrice?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gte?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lte?: InputMaybe<Scalars['Float']['input']>;
  state_Id?: InputMaybe<Scalars['ID']['input']>;
  state_Name?: InputMaybe<Scalars['String']['input']>;
  state_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  state_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxesIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  taxes_City_Abr?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_City_Name?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_Percent?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchFavoritesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchFollowerArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isGoogle?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  username_Icontains?: InputMaybe<Scalars['String']['input']>;
  username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchFollowingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isGoogle?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  username_Icontains?: InputMaybe<Scalars['String']['input']>;
  username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchItemPromotionArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Id?: InputMaybe<Scalars['ID']['input']>;
  promotion_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchMessageArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_Icontains?: InputMaybe<Scalars['String']['input']>;
  subject_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Id?: InputMaybe<Scalars['String']['input']>;
  userSend_Email?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userSend_Id?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchMostPopularProductArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category_Id?: InputMaybe<Scalars['ID']['input']>;
  category_Name?: InputMaybe<Scalars['String']['input']>;
  category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Description?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Id?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deliveryTimesDays?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gte?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lte?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  firmOnPrice?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  holdForNow?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_Gt?: InputMaybe<Scalars['Float']['input']>;
  price_Gte?: InputMaybe<Scalars['Float']['input']>;
  price_Lt?: InputMaybe<Scalars['Float']['input']>;
  price_Lte?: InputMaybe<Scalars['Float']['input']>;
  qualification?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  quantityForSale?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gte?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lte?: InputMaybe<Scalars['Int']['input']>;
  sellAndShipNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  shippingMethod?: InputMaybe<CoreProductShippingMethodChoices>;
  standardShippingPrice?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gte?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lte?: InputMaybe<Scalars['Float']['input']>;
  state_Id?: InputMaybe<Scalars['ID']['input']>;
  state_Name?: InputMaybe<Scalars['String']['input']>;
  state_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  state_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxesIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  taxes_City_Abr?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_City_Name?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_Percent?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchNotificationArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchOrdersArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cantProduct?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gte?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceEstimatedTaxToBeCollected?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gte?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lte?: InputMaybe<Scalars['Date']['input']>;
  statusPayment?: InputMaybe<CoreOrderStatusPaymentChoices>;
  userBuyer_Email?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Id?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchPhotoSystemArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesSearchProductArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category_Id?: InputMaybe<Scalars['ID']['input']>;
  category_Name?: InputMaybe<Scalars['String']['input']>;
  category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Description?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  condition_Id?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deliveryTimesDays?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Gte?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lt?: InputMaybe<Scalars['Int']['input']>;
  deliveryTimesDays_Lte?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  firmOnPrice?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  holdForNow?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_Gt?: InputMaybe<Scalars['Float']['input']>;
  price_Gte?: InputMaybe<Scalars['Float']['input']>;
  price_Lt?: InputMaybe<Scalars['Float']['input']>;
  price_Lte?: InputMaybe<Scalars['Float']['input']>;
  qualification?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  quantityForSale?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Gte?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lt?: InputMaybe<Scalars['Int']['input']>;
  quantityForSale_Lte?: InputMaybe<Scalars['Int']['input']>;
  sellAndShipNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  shippingMethod?: InputMaybe<CoreProductShippingMethodChoices>;
  standardShippingPrice?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Gte?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lt?: InputMaybe<Scalars['Float']['input']>;
  standardShippingPrice_Lte?: InputMaybe<Scalars['Float']['input']>;
  state_Id?: InputMaybe<Scalars['ID']['input']>;
  state_Name?: InputMaybe<Scalars['String']['input']>;
  state_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  state_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxesIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  taxes_City_Abr?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Abr_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_City_Name?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  taxes_City_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  taxes_Id?: InputMaybe<Scalars['ID']['input']>;
  taxes_Percent?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  taxes_Percent_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchPromotionArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_Gt?: InputMaybe<Scalars['Int']['input']>;
  duration_Gte?: InputMaybe<Scalars['Int']['input']>;
  duration_Lt?: InputMaybe<Scalars['Int']['input']>;
  duration_Lte?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  itempromotion_Product_Description?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_Id?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_Title?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Email?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Id?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Name?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Phone?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  itempromotion_Product_User_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
  price_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  price_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  price_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  price_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  typeDuration?: InputMaybe<CorePromotionTypeDurationChoices>;
};


export type QueriesSearchStateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_Icontains?: InputMaybe<Scalars['String']['input']>;
  state_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchStateProductArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchSubcategoryArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category_Id?: InputMaybe<Scalars['ID']['input']>;
  category_Name?: InputMaybe<Scalars['String']['input']>;
  category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesSearchTaxArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Abr?: InputMaybe<Scalars['String']['input']>;
  city_Abr_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_Abr_Istartswith?: InputMaybe<Scalars['String']['input']>;
  city_Active?: InputMaybe<Scalars['Boolean']['input']>;
  city_Id?: InputMaybe<Scalars['ID']['input']>;
  city_Name?: InputMaybe<Scalars['String']['input']>;
  city_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  city_State_Id?: InputMaybe<Scalars['ID']['input']>;
  city_State_State?: InputMaybe<Scalars['String']['input']>;
  city_State_State_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_State_State_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  percent?: InputMaybe<Scalars['Decimal']['input']>;
  percent_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  percent_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  percent_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  percent_Lte?: InputMaybe<Scalars['Decimal']['input']>;
};


export type QueriesSearchTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_Icontains?: InputMaybe<Scalars['String']['input']>;
  token_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchTransactionPromotionProductArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Category_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Category_Name?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Qualification?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_State_Id?: InputMaybe<Scalars['ID']['input']>;
  product_State_Name?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Duration?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Itempromotion_Product_Description?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Price?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_TypeDuration?: InputMaybe<CorePromotionTypeDurationChoices>;
  statusPayment?: InputMaybe<PaymentsTransactionPromotionProductStatusPaymentChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Phone?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};


export type QueriesSearchTransferArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Category_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Category_Name?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Qualification?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_State_Id?: InputMaybe<Scalars['ID']['input']>;
  product_State_Name?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Duration?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Itempromotion_Product_Description?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Price?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_TypeDuration?: InputMaybe<CorePromotionTypeDurationChoices>;
  statusPayment?: InputMaybe<PaymentsTransactionPromotionProductStatusPaymentChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Phone?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchTransferAdminArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  amount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  amount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  amount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  amount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransferStatusTransactionChoices>;
  transaction_Buyer_Email?: InputMaybe<Scalars['String']['input']>;
  transaction_Buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  transaction_Buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  transaction_Buyer_Id?: InputMaybe<Scalars['String']['input']>;
  transaction_Buyer_Name?: InputMaybe<Scalars['String']['input']>;
  transaction_Buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  transaction_Buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  transaction_Seller_Email?: InputMaybe<Scalars['String']['input']>;
  transaction_Seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  transaction_Seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  transaction_Seller_Id?: InputMaybe<Scalars['String']['input']>;
  transaction_Seller_Name?: InputMaybe<Scalars['String']['input']>;
  transaction_Seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  transaction_Seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  typeTransfer?: InputMaybe<PaymentsTransferTypeTransferChoices>;
};


export type QueriesSearchUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isGoogle?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  username_Icontains?: InputMaybe<Scalars['String']['input']>;
  username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesSearchZipCodeArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Id?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesStripeTransactionsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RemoveProductPromotionMutation = {
  __typename?: 'RemoveProductPromotionMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ProductNode>;
};

export type SalesData = {
  __typename?: 'SalesData';
  serie?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  totalSales?: Maybe<Scalars['Int']['output']>;
};

export type SeriesType = {
  __typename?: 'SeriesType';
  data?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StateNode = Node & {
  __typename?: 'StateNode';
  active: Scalars['Boolean']['output'];
  citySet: CityNodeConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  state: Scalars['String']['output'];
};


export type StateNodeCitySetArgs = {
  abr?: InputMaybe<Scalars['String']['input']>;
  abr_Icontains?: InputMaybe<Scalars['String']['input']>;
  abr_Istartswith?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  state_Id?: InputMaybe<Scalars['ID']['input']>;
  state_Isnull?: InputMaybe<Scalars['Boolean']['input']>;
  state_State?: InputMaybe<Scalars['String']['input']>;
  state_State_Icontains?: InputMaybe<Scalars['String']['input']>;
  state_State_Istartswith?: InputMaybe<Scalars['String']['input']>;
  tax_Isnull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StateNodeConnection = {
  __typename?: 'StateNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StateNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StateNode` and its cursor. */
export type StateNodeEdge = {
  __typename?: 'StateNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StateNode>;
};

export type StateProductNode = Node & {
  __typename?: 'StateProductNode';
  active: Scalars['Boolean']['output'];
  color: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  productSet: Array<ProductType>;
};

export type StateProductNodeConnection = {
  __typename?: 'StateProductNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StateProductNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StateProductNode` and its cursor. */
export type StateProductNodeEdge = {
  __typename?: 'StateProductNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StateProductNode>;
};

export type StripeTransactionType = {
  __typename?: 'StripeTransactionType';
  /** Monto de la transacción en la moneda especificada */
  amount: Scalars['Float']['output'];
  created?: Maybe<Scalars['Int']['output']>;
  /** Moneda en la que se realizó la transacción */
  currency: Scalars['String']['output'];
  /** Correo electrónico del cliente asociado */
  customerEmail?: Maybe<Scalars['String']['output']>;
  /** ID del cliente asociado en Stripe */
  customerId?: Maybe<Scalars['String']['output']>;
  /** Descripción de la transacción */
  description?: Maybe<Scalars['String']['output']>;
  /** ID único de la transacción en Stripe */
  id: Scalars['String']['output'];
  /** Información del usuario local asociada al cliente, si existe */
  localUserData?: Maybe<LocalUserDataType>;
  /** Estado del PaymentIntent asociado, si aplica */
  paymentIntentStatus?: Maybe<Scalars['String']['output']>;
  /** Método de pago utilizado para la transacción */
  paymentMethod?: Maybe<Scalars['String']['output']>;
  /** Estado de la transacción (succeeded, failed, etc.) */
  status?: Maybe<Scalars['String']['output']>;
};

export type SubCategoryNode = Node & {
  __typename?: 'SubCategoryNode';
  active: Scalars['Boolean']['output'];
  category: CategoryProductNode;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  productSet: Array<ProductType>;
};

export type SubCategoryNodeConnection = {
  __typename?: 'SubCategoryNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SubCategoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SubCategoryNode` and its cursor. */
export type SubCategoryNodeEdge = {
  __typename?: 'SubCategoryNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SubCategoryNode>;
};

export type TaxNode = Node & {
  __typename?: 'TaxNode';
  active: Scalars['Boolean']['output'];
  city?: Maybe<CityNode>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  percent: Scalars['Decimal']['output'];
  productSet: Array<ProductType>;
};

export type TaxNodeConnection = {
  __typename?: 'TaxNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TaxNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TaxNode` and its cursor. */
export type TaxNodeEdge = {
  __typename?: 'TaxNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TaxNode>;
};

export type TokenAppNode = Node & {
  __typename?: 'TokenAppNode';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  user: BuyerType;
};

export type TokenAppNodeConnection = {
  __typename?: 'TokenAppNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TokenAppNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TokenAppNode` and its cursor. */
export type TokenAppNodeEdge = {
  __typename?: 'TokenAppNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TokenAppNode>;
};

export type TransactionNode = Node & {
  __typename?: 'TransactionNode';
  active: Scalars['Boolean']['output'];
  buyer: BuyerType;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  mount: Scalars['Decimal']['output'];
  order?: Maybe<OrderNode>;
  product: ProductType;
  seller: BuyerType;
  sessionId?: Maybe<Scalars['String']['output']>;
  statusTransaction: PaymentsTransactionStatusTransactionChoices;
  transfer?: Maybe<TransferNode>;
  urlPay?: Maybe<Scalars['String']['output']>;
};

export type TransactionNodeConnection = {
  __typename?: 'TransactionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransactionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TransactionNode` and its cursor. */
export type TransactionNodeEdge = {
  __typename?: 'TransactionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TransactionNode>;
};

export type TransactionPromotionProductNode = Node & {
  __typename?: 'TransactionPromotionProductNode';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  mount: Scalars['Decimal']['output'];
  product: ProductType;
  promotion: PromotionNode;
  sessionId?: Maybe<Scalars['String']['output']>;
  statusPayment: PaymentsTransactionPromotionProductStatusPaymentChoices;
  urlPay?: Maybe<Scalars['String']['output']>;
  user: BuyerType;
};

export type TransactionPromotionProductNodeConnection = {
  __typename?: 'TransactionPromotionProductNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransactionPromotionProductNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TransactionPromotionProductNode` and its cursor. */
export type TransactionPromotionProductNodeEdge = {
  __typename?: 'TransactionPromotionProductNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TransactionPromotionProductNode>;
};

export type TransferNode = Node & {
  __typename?: 'TransferNode';
  active: Scalars['Boolean']['output'];
  amount: Scalars['Decimal']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  idTransferStripe?: Maybe<Scalars['String']['output']>;
  jsonTransferStripe?: Maybe<Scalars['JSONString']['output']>;
  statusTransaction: PaymentsTransferStatusTransactionChoices;
  transaction: TransactionNode;
  typeTransfer: PaymentsTransferTypeTransferChoices;
};

export type TransferNodeConnection = {
  __typename?: 'TransferNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransferNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TransferNode` and its cursor. */
export type TransferNodeEdge = {
  __typename?: 'TransferNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TransferNode>;
};

export type UnfollowMutation = {
  __typename?: 'UnfollowMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<FollowerNode>;
};

export type UpdateAddressMutation = {
  __typename?: 'UpdateAddressMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<AddressNode>;
};

export type UpdateAddressSerializer = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  codeZip: Scalars['String']['input'];
  country: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  setDefault: Scalars['Boolean']['input'];
  stateProvinceRegion: Scalars['String']['input'];
  user?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAdmin = {
  email: Scalars['String']['input'];
  group: Array<InputMaybe<Scalars['String']['input']>>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  userPermissions: Array<InputMaybe<Scalars['String']['input']>>;
};

export type UpdateBankMutation = {
  __typename?: 'UpdateBankMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<BankNode>;
};

export type UpdateBankSerializer = {
  accountNumber: Scalars['BigInt']['input'];
  address: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nameAccount: Scalars['String']['input'];
  routingNumber: Scalars['Int']['input'];
};

export type UpdateCategoryProductMutation = {
  __typename?: 'UpdateCategoryProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CategoryProductNode>;
};

export type UpdateCategorySerializer = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateCityMutation = {
  __typename?: 'UpdateCityMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CityNode>;
};

export type UpdateCitySerializer = {
  abr: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type UpdateCommentMutation = {
  __typename?: 'UpdateCommentMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CommentNode>;
};

export type UpdateCommentSerializer = {
  evaluation: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConditionMutation = {
  __typename?: 'UpdateConditionMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ConditionNode>;
};

export type UpdateConditionSerializer = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type UpdateCountryMutation = {
  __typename?: 'UpdateCountryMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CountryNode>;
};

export type UpdateCountrySerializer = {
  id: Scalars['String']['input'];
  iso2: Scalars['String']['input'];
  iso3: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nom: Scalars['String']['input'];
  nombre: Scalars['String']['input'];
  phoneCode: Scalars['String']['input'];
};

export type UpdateCreditCardMutation = {
  __typename?: 'UpdateCreditCardMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<CreditCardNode>;
};

export type UpdateCreditCardSerializer = {
  address: Scalars['String']['input'];
  cardNumber: Scalars['String']['input'];
  cardType: Scalars['String']['input'];
  cvv: Scalars['String']['input'];
  dueDateMonth: Scalars['Int']['input'];
  dueDateYear: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type UpdateEmailMutation = {
  __typename?: 'UpdateEmailMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<UserNode>;
};

export type UpdateGroup = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  permissions: Array<InputMaybe<Scalars['String']['input']>>;
};

export type UpdateGroupMutation = {
  __typename?: 'UpdateGroupMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<GroupType>;
};

export type UpdateLiveAuction = {
  __typename?: 'UpdateLiveAuction';
  liveAuction?: Maybe<LiveAuctionType>;
};

export type UpdateNameMutation = {
  __typename?: 'UpdateNameMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<UserNode>;
};

export type UpdatePhoneMutation = {
  __typename?: 'UpdatePhoneMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<UserNode>;
};

export type UpdateProductMutation = {
  __typename?: 'UpdateProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ProductNode>;
};

export type UpdateProductSerializer = {
  address?: InputMaybe<Scalars['String']['input']>;
  category: Scalars['String']['input'];
  condition: Scalars['String']['input'];
  deliveryTimesDays: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  firmOnPrice: Scalars['Boolean']['input'];
  holdForNow: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
  photos: Array<InputMaybe<Scalars['String']['input']>>;
  price: Scalars['Float']['input'];
  quantityForSale: Scalars['Int']['input'];
  sellAndShipNationwide: Scalars['Boolean']['input'];
  shippingMethod?: InputMaybe<Scalars['String']['input']>;
  standardShippingPrice: Scalars['Float']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  subcategory?: InputMaybe<Scalars['String']['input']>;
  taxes?: InputMaybe<Scalars['String']['input']>;
  taxesIncluded: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePromotionMutation = {
  __typename?: 'UpdatePromotionMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<PromotionNode>;
};

export type UpdatePromotionSerializer = {
  duration: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  typeDuration: Scalars['String']['input'];
};

export type UpdateStateMutation = {
  __typename?: 'UpdateStateMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<StateNode>;
};

export type UpdateStateProductMutation = {
  __typename?: 'UpdateStateProductMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<StateProductNode>;
};

export type UpdateStateProductSerializer = {
  color?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateStateSerializer = {
  id: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type UpdateSubCategorySerializer = {
  category: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateSubcategoryMutation = {
  __typename?: 'UpdateSubcategoryMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<SubCategoryNode>;
};

export type UpdateTaxMutation = {
  __typename?: 'UpdateTaxMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<TaxNode>;
};

export type UpdateTaxSerializer = {
  city: Scalars['String']['input'];
  id: Scalars['String']['input'];
  percent: Scalars['Float']['input'];
};

export type UpdateUserMutation = {
  __typename?: 'UpdateUserMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<UserNode>;
};

export type UpdateUsernameMutation = {
  __typename?: 'UpdateUsernameMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<UserNode>;
};

export type UpdateZipCodeMutation = {
  __typename?: 'UpdateZipCodeMutation';
  error?: Maybe<ErrorApplication>;
  info?: Maybe<ZipCodeNode>;
};

export type UpdateZipCodeSerializer = {
  city: Scalars['String']['input'];
  id: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type UploadImageProductMutation = {
  __typename?: 'UploadImageProductMutation';
  error?: Maybe<ErrorApplication>;
  image?: Maybe<Scalars['String']['output']>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type UploadImageUserMutation = {
  __typename?: 'UploadImageUserMutation';
  error?: Maybe<ErrorApplication>;
  image?: Maybe<Scalars['String']['output']>;
  info?: Maybe<Scalars['Boolean']['output']>;
};

export type UserInfoCurrent = {
  __typename?: 'UserInfoCurrent';
  bought?: Maybe<Scalars['Int']['output']>;
  followers?: Maybe<Scalars['Int']['output']>;
  followings?: Maybe<Scalars['Int']['output']>;
  sold?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<UserType>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  actionsystemSet: ActionSystemNodeConnection;
  addressSet: AddressNodeConnection;
  bankUserSd: BankNodeConnection;
  buyerTransactionSd: TransactionNodeConnection;
  commentSet: CommentNodeConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdLiveAuctions: Array<LiveAuctionType>;
  creditCardUserSd: CreditCardNodeConnection;
  deleted: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  evaluation: Scalars['Decimal']['output'];
  favoriteSet: FavoriteNodeConnection;
  fcmdeviceSet: FcmDeviceNodeConnection;
  followers: Array<BuyerType>;
  followersSet: FollowingNodeConnection;
  following: Array<BuyerType>;
  followingSet: FollowingNodeConnection;
  /** Lista de grupos del usuario. */
  group?: Maybe<Array<Maybe<GroupType>>>;
  /** Los grupos a los que pertenece este usuario. Un usuario tendrá todos los permisos asignados a cada uno de sus grupos. */
  groups: Array<GroupType>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  idAccount?: Maybe<Scalars['String']['output']>;
  idCustomer?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isGoogle: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  isSuperuser: Scalars['Boolean']['output'];
  jsonAccount?: Maybe<Scalars['JSONString']['output']>;
  jsonCustomer?: Maybe<Scalars['JSONString']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  likeSet: Array<LikeNode>;
  likedProducts: Array<ProductType>;
  liveAuctions: Array<LiveAuctionType>;
  name?: Maybe<Scalars['String']['output']>;
  notificationSet: NotificationNodeConnection;
  orderSet: OrderNodeConnection;
  password: Scalars['String']['output'];
  /** Lista de permisos del usuario. */
  permissions?: Maybe<Array<Maybe<PermissionType>>>;
  phone?: Maybe<Scalars['String']['output']>;
  /** Foto del usuario. */
  photo?: Maybe<PhotoUserSystemNode>;
  productSet: Array<ProductType>;
  profilePhoto?: Maybe<PhotoUserSystemNode>;
  sellerTransactionSd: TransactionNodeConnection;
  tokenappSet: TokenAppNodeConnection;
  transactionpromotionproductSet: TransactionPromotionProductNodeConnection;
  /** Permisos específicos para este usuario. */
  userPermissions: Array<PermissionType>;
  userReceiptStreamDealer: MessageNodeConnection;
  userSendStreamDealer: MessageNodeConnection;
  username?: Maybe<Scalars['String']['output']>;
};


export type UserNodeActionsystemSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeAddressSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_Istartswith?: InputMaybe<Scalars['String']['input']>;
  codeZip?: InputMaybe<Scalars['String']['input']>;
  codeZip_Icontains?: InputMaybe<Scalars['String']['input']>;
  codeZip_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Id?: InputMaybe<Scalars['ID']['input']>;
  country_Iso2?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Iso3?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Name?: InputMaybe<Scalars['String']['input']>;
  country_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nom?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nombre?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Icontains?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Deleted?: InputMaybe<Scalars['Boolean']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeBankUserSdArgs = {
  accountNumber?: InputMaybe<Scalars['BigInt']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAccount?: InputMaybe<Scalars['String']['input']>;
  nameAccount_Icontains?: InputMaybe<Scalars['String']['input']>;
  nameAccount_Istartswith?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  routingNumber?: InputMaybe<Scalars['BigInt']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeBuyerTransactionSdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};


export type UserNodeCommentSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  client_Email?: InputMaybe<Scalars['String']['input']>;
  client_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Id?: InputMaybe<Scalars['String']['input']>;
  client_Name?: InputMaybe<Scalars['String']['input']>;
  client_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Phone?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeCreditCardUserSdArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cardType?: InputMaybe<PaymentsCreditCardCardTypeChoices>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  cvv?: InputMaybe<Scalars['String']['input']>;
  cvv_Icontains?: InputMaybe<Scalars['String']['input']>;
  cvv_Istartswith?: InputMaybe<Scalars['String']['input']>;
  dueDateMonth?: InputMaybe<Scalars['Int']['input']>;
  dueDateYear?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeFavoriteSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeFcmdeviceSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  registrationId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FcmDjangoFcmDeviceTypeChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeFollowersSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodeFollowingSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodeNotificationSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeOrderSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cantProduct?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gte?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceEstimatedTaxToBeCollected?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gte?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lte?: InputMaybe<Scalars['Date']['input']>;
  statusPayment?: InputMaybe<CoreOrderStatusPaymentChoices>;
  userBuyer_Email?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Id?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeSellerTransactionSdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};


export type UserNodeTokenappSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_Icontains?: InputMaybe<Scalars['String']['input']>;
  token_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeTransactionpromotionproductSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Category_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Category_Name?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Qualification?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_State_Id?: InputMaybe<Scalars['ID']['input']>;
  product_State_Name?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Duration?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Itempromotion_Product_Description?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Price?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_TypeDuration?: InputMaybe<CorePromotionTypeDurationChoices>;
  statusPayment?: InputMaybe<PaymentsTransactionPromotionProductStatusPaymentChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Phone?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeUserReceiptStreamDealerArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_Icontains?: InputMaybe<Scalars['String']['input']>;
  subject_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Id?: InputMaybe<Scalars['String']['input']>;
  userSend_Email?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userSend_Id?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeUserSendStreamDealerArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_Icontains?: InputMaybe<Scalars['String']['input']>;
  subject_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Id?: InputMaybe<Scalars['String']['input']>;
  userSend_Email?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userSend_Id?: InputMaybe<Scalars['String']['input']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type UserType = {
  __typename?: 'UserType';
  actionsystemSet: ActionSystemNodeConnection;
  addressSet: AddressNodeConnection;
  bankUserSd: BankNodeConnection;
  buyerTransactionSd: TransactionNodeConnection;
  commentSet: CommentNodeConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdLiveAuctions: Array<LiveAuctionType>;
  creditCardUserSd: CreditCardNodeConnection;
  deleted: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  evaluation: Scalars['Decimal']['output'];
  favoriteSet: FavoriteNodeConnection;
  fcmdeviceSet: FcmDeviceNodeConnection;
  followers: Array<BuyerType>;
  followersSet: FollowingNodeConnection;
  following: Array<BuyerType>;
  followingSet: FollowingNodeConnection;
  /** Los grupos a los que pertenece este usuario. Un usuario tendrá todos los permisos asignados a cada uno de sus grupos. */
  groups: Array<GroupType>;
  id: Scalars['String']['output'];
  idAccount?: Maybe<Scalars['String']['output']>;
  idCustomer?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isGoogle: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  isSuperuser: Scalars['Boolean']['output'];
  jsonAccount?: Maybe<Scalars['JSONString']['output']>;
  jsonCustomer?: Maybe<Scalars['JSONString']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  likeSet: Array<LikeNode>;
  likedProducts: Array<ProductType>;
  liveAuctions: Array<LiveAuctionType>;
  name?: Maybe<Scalars['String']['output']>;
  notificationSet: NotificationNodeConnection;
  orderSet: OrderNodeConnection;
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  productSet: Array<ProductType>;
  profilePhoto?: Maybe<PhotoUserSystemNode>;
  sellerTransactionSd: TransactionNodeConnection;
  tokenappSet: TokenAppNodeConnection;
  transactionpromotionproductSet: TransactionPromotionProductNodeConnection;
  /** Permisos específicos para este usuario. */
  userPermissions: Array<PermissionType>;
  userReceiptStreamDealer: MessageNodeConnection;
  userSendStreamDealer: MessageNodeConnection;
  username?: Maybe<Scalars['String']['output']>;
};


export type UserTypeActionsystemSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeAddressSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_Icontains?: InputMaybe<Scalars['String']['input']>;
  city_Istartswith?: InputMaybe<Scalars['String']['input']>;
  codeZip?: InputMaybe<Scalars['String']['input']>;
  codeZip_Icontains?: InputMaybe<Scalars['String']['input']>;
  codeZip_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Id?: InputMaybe<Scalars['ID']['input']>;
  country_Iso2?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso2_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Iso3?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Iso3_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Name?: InputMaybe<Scalars['String']['input']>;
  country_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nom?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nom_Istartswith?: InputMaybe<Scalars['String']['input']>;
  country_Nombre?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Icontains?: InputMaybe<Scalars['String']['input']>;
  country_Nombre_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Icontains?: InputMaybe<Scalars['String']['input']>;
  stateProvinceRegion_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Deleted?: InputMaybe<Scalars['Boolean']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeBankUserSdArgs = {
  accountNumber?: InputMaybe<Scalars['BigInt']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAccount?: InputMaybe<Scalars['String']['input']>;
  nameAccount_Icontains?: InputMaybe<Scalars['String']['input']>;
  nameAccount_Istartswith?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  routingNumber?: InputMaybe<Scalars['BigInt']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeBuyerTransactionSdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};


export type UserTypeCommentSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  client_Email?: InputMaybe<Scalars['String']['input']>;
  client_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Id?: InputMaybe<Scalars['String']['input']>;
  client_Name?: InputMaybe<Scalars['String']['input']>;
  client_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  client_Phone?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  client_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeCreditCardUserSdArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  address_Istartswith?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cardType?: InputMaybe<PaymentsCreditCardCardTypeChoices>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  cvv?: InputMaybe<Scalars['String']['input']>;
  cvv_Icontains?: InputMaybe<Scalars['String']['input']>;
  cvv_Istartswith?: InputMaybe<Scalars['String']['input']>;
  dueDateMonth?: InputMaybe<Scalars['Int']['input']>;
  dueDateYear?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  zipCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeFavoriteSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeFcmdeviceSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  registrationId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FcmDjangoFcmDeviceTypeChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeFollowersSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTypeFollowingSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTypeNotificationSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeOrderSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cantProduct?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Gte?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lt?: InputMaybe<Scalars['Int']['input']>;
  cantProduct_Lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceEstimatedTaxToBeCollected?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceEstimatedTaxToBeCollected_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceItems_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceOrderTotal_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceShippingHading_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  priceTotalBeforeTax_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Gte?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lt?: InputMaybe<Scalars['Date']['input']>;
  shipping_Lte?: InputMaybe<Scalars['Date']['input']>;
  statusPayment?: InputMaybe<CoreOrderStatusPaymentChoices>;
  userBuyer_Email?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Id?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  userBuyer_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeSellerTransactionSdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyer_Email?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  buyer_Name?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  buyer_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  seller_Email?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  seller_Name?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  seller_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  statusTransaction?: InputMaybe<PaymentsTransactionStatusTransactionChoices>;
};


export type UserTypeTokenappSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_Icontains?: InputMaybe<Scalars['String']['input']>;
  token_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Id?: InputMaybe<Scalars['String']['input']>;
  user_IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeTransactionpromotionproductSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mount?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  mount_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  product_Category_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Category_Name?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Category_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Condition_Id?: InputMaybe<Scalars['ID']['input']>;
  product_Description?: InputMaybe<Scalars['String']['input']>;
  product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Qualification?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  product_Qualification_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  product_State_Id?: InputMaybe<Scalars['ID']['input']>;
  product_State_Name?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_State_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  product_Title?: InputMaybe<Scalars['String']['input']>;
  product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Duration?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Gte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lt?: InputMaybe<Scalars['Int']['input']>;
  promotion_Duration_Lte?: InputMaybe<Scalars['Int']['input']>;
  promotion_Itempromotion_Product_Description?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Id?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  promotion_Itempromotion_Product_User_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  promotion_Price?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Gte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lt?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_Price_Lte?: InputMaybe<Scalars['Decimal']['input']>;
  promotion_TypeDuration?: InputMaybe<CorePromotionTypeDurationChoices>;
  statusPayment?: InputMaybe<PaymentsTransactionPromotionProductStatusPaymentChoices>;
  user_Email?: InputMaybe<Scalars['String']['input']>;
  user_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Name?: InputMaybe<Scalars['String']['input']>;
  user_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Phone?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
  user_Username?: InputMaybe<Scalars['String']['input']>;
  user_Username_Icontains?: InputMaybe<Scalars['String']['input']>;
  user_Username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeUserReceiptStreamDealerArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_Icontains?: InputMaybe<Scalars['String']['input']>;
  subject_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Id?: InputMaybe<Scalars['String']['input']>;
  userSend_Email?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userSend_Id?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeUserSendStreamDealerArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_Icontains?: InputMaybe<Scalars['String']['input']>;
  message_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_Icontains?: InputMaybe<Scalars['String']['input']>;
  subject_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userReceipt_Id?: InputMaybe<Scalars['String']['input']>;
  userSend_Email?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  userSend_Email_Istartswith?: InputMaybe<Scalars['String']['input']>;
  userSend_Id?: InputMaybe<Scalars['String']['input']>;
};

export type ZipCodeNode = Node & {
  __typename?: 'ZipCodeNode';
  active: Scalars['Boolean']['output'];
  city: CityNode;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  zipCode: Scalars['String']['output'];
};

export type ZipCodeNodeConnection = {
  __typename?: 'ZipCodeNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ZipCodeNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ZipCodeNode` and its cursor. */
export type ZipCodeNodeEdge = {
  __typename?: 'ZipCodeNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ZipCodeNode>;
};

export type SearchProductQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  category_Id?: InputMaybe<Scalars['ID']['input']>;
  address_Icontains?: InputMaybe<Scalars['String']['input']>;
  condition_Id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type SearchProductQuery = { __typename?: 'Queries', searchProduct?: { __typename?: 'ProductNodeConnection', pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'ProductNodeEdge', cursor: string, node?: { __typename?: 'ProductNode', id: string, title: string, address?: string | null, description: string, price: number, quantityForSale: number, standardShippingPrice: number, createdAt?: any | null, active: boolean, category: { __typename?: 'CategoryProductNode', name: string }, condition: { __typename?: 'ConditionNode', description: string }, photos: { __typename?: 'PhotoSystemNodeConnection', edges: Array<{ __typename?: 'PhotoSystemNodeEdge', node?: { __typename?: 'PhotoSystemNode', url: string } | null } | null> } } | null } | null> } | null };


export const SearchProductDocument = gql`
    query SearchProduct($first: Int, $before: String, $after: String, $deleted: Boolean, $title_Icontains: String, $category_Id: ID, $address_Icontains: String, $condition_Id: ID) {
  searchProduct(
    first: $first
    before: $before
    after: $after
    deleted: $deleted
    title_Icontains: $title_Icontains
    category_Id: $category_Id
    address_Icontains: $address_Icontains
    condition_Id: $condition_Id
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        address
        category {
          name
        }
        condition {
          description
        }
        description
        price
        photos {
          edges {
            node {
              url
            }
          }
        }
        quantityForSale
        standardShippingPrice
        createdAt
        active
      }
    }
  }
}
    `;

export function useSearchProductQuery(options?: Omit<Urql.UseQueryArgs<never, SearchProductQueryVariables | undefined>, 'query'>) {
  return Urql.useQuery<SearchProductQuery, SearchProductQueryVariables | undefined>({ query: SearchProductDocument, variables: undefined, ...options });
};