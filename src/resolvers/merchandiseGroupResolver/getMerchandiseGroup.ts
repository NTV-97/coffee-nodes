import { IMerchandiseGroup, MerchandiseGroupModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

const compare = (a: IMerchandiseGroup, b: IMerchandiseGroup) => {
  if (a.merchandiseGroupName < b.merchandiseGroupName) {
    return -1;
  }
  if (a.merchandiseGroupName > b.merchandiseGroupName) {
    return 1;
  }
  return 0;
};

export const getMerchandiseGroup = async (_: any, _params: undefined, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  // return merchandiseGroup.sort(compare);
};
