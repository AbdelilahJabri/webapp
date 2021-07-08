/**
 * Appends REQUEST async action type
 */

export const REQUEST = actionType => `${actionType}_PENDING`;

/**
 * Appends SUCCESS async action type
 */

export const SUCCESS = actionType => `${actionType}_FULFILLED`;

/**
 * Appends FAILURE async action type
 */

export const FAILURE = actionType => `${actionType}_REJECTED`;

export const LIST = actionType => `LIST_${actionType}`;
export const GET = actionType => `GET_${actionType}`;
export const PUT = actionType => `PUT_${actionType}`;
export const POST = actionType => `POST_${actionType}`;
export const DELETE = actionType => `DELETE_${actionType}`;
export const ARCHIVE = actionType => `ARCHIVE_${actionType}`;
export const FAVORITE = actionType => `FAVORITE_${actionType}`;
export const UNFAVORITE = actionType => `UNFAVORITE_${actionType}`;
export const PATCH = actionType => `PATCH_${actionType}`;
export const CLEAR = actionType => `CLEAR_${actionType}`;

export const CHANGE_PAGE = actionType => `CHANGE_PAGE_${actionType}`;

export const MULTIPLE = actionType => `MULTIPLE_${actionType}`;
