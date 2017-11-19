export interface BankType {
  id: number;
  name: string;
  parentId: number;
  accounts ?: Account [];
  createdAt: Date;
  updatedAt: Date;
}

export interface AccountList {
  id: number;
  name: string;
  createdBy: number;
  accounts ?: Account[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Industry {
  id: number;
  name: string;
  status: boolean;
  accounts ?: Account [];
  createdAt: Date;
  updatedAt: Date;
}

export interface Account {
  id: number;
  aka: string;
  legalName: string;
  shortCode: string;
  domain: string;
  legalAddress: string;
  accountStatus: string;
  isClient: boolean;
  parentId: number;
  accountType: string;
  bankTypes ?: BankType[];
  accountLists ?: AccountList[];
  industries ?: Industry [];
  createdAt: Date;
  updatedAt: Date;
}