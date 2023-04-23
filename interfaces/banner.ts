export interface IBanner {
  id: number;
  name: string | null;
  type: string | null;
  imageURL: string | null;
  htmlTemplate: string | null;
  url: string | null;
  target: string | null;
  width: string | number;
  height: string | number;
  view_count: string | number;
  expires_at: string | null;
  origin_type: string | null;
  origin_id: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  platform: string;
}
export interface IBannerCampaign {
  created_at: string,
  discount_percent: number,
  id: number,
  image_url: string,
  result_type: string,
  special: boolean,
  special_max_price: number,
  special_min_price: number,
  title: string,
  __v: number,
  _id: string
}