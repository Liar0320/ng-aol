import {
  Condition,
  altKeyOnly,
  altShiftKeysOnly,
  click,
  doubleClick,
  mouseActionButton,
  mouseOnly,
  noModifierKeys,
  penOnly,
  focus,
  platformModifierKeyOnly,
  pointerMove,
  primaryAction,
  shiftKeyOnly,
  singleClick,
  targetNotEditable,
  touchOnly,
} from 'ol/events/condition';

// var conditionType:
//   | 'altKeyOnly'
//   | 'altShiftKeysOnly'
//   | 'click'
//   | 'doubleClick'
//   | 'focus'
//   | 'mouseActionButton'
//   | 'mouseOnly'
//   | 'noModifierKeys'
//   | 'penOnly'
//   | 'platformModifierKeyOnly'
//   | 'pointerMove'
//   | 'primaryAction'
//   | 'shiftKeyOnly'
//   | 'singleClick'
//   | 'targetNotEditable'
//   | 'touchOnly';

export class SelectInteractionExtend {
  condition?: Condition;
  /**初始化condition状态 */
  initCondition() {
    var key: conditionType | Condition = this.condition;
    if (typeof key === 'function') return key;
    switch (key) {
      case 'altKeyOnly':
        this.condition = altKeyOnly;
        break;
      case 'altShiftKeysOnly':
        this.condition = altShiftKeysOnly;
        break;
      case 'click':
        this.condition = click;
        break;
      case 'doubleClick':
        this.condition = doubleClick;
        break;
      case 'focus':
        this.condition = focus;
        break;
      case 'mouseActionButton':
        this.condition = mouseActionButton;
        break;
      case 'mouseOnly':
        this.condition = mouseOnly;
        break;
      case 'noModifierKeys':
        this.condition = noModifierKeys;
        break;
      case 'penOnly':
        this.condition = penOnly;
        break;
      case 'platformModifierKeyOnly':
        this.condition = platformModifierKeyOnly;
        break;
      case 'pointerMove':
        this.condition = pointerMove;
        break;
      case 'primaryAction':
        this.condition = primaryAction;
        break;
      case 'shiftKeyOnly':
        this.condition = shiftKeyOnly;
        break;
      case 'singleClick':
        this.condition = singleClick;
        break;
      case 'targetNotEditable':
        this.condition = targetNotEditable;
        break;
      case 'touchOnly':
        this.condition = touchOnly;
        break;
      default:
        this.condition = click;
        break;
    }
  }
}

enum conditionType {
  altKeyOnly = 'altKeyOnly',
  altShiftKeysOnly = 'altShiftKeysOnly',
  click = 'click',
  doubleClick = 'doubleClick',
  focus = 'focus',
  mouseActionButton = 'mouseActionButton',
  mouseOnly = 'mouseOnly',
  noModifierKeys = 'noModifierKeys',
  penOnly = 'penOnly',
  platformModifierKeyOnly = 'platformModifierKeyOnly',
  pointerMove = 'pointerMove',
  primaryAction = 'primaryAction',
  shiftKeyOnly = 'shiftKeyOnly',
  singleClick = 'singleClick',
  targetNotEditable = 'targetNotEditable',
  touchOnly = 'touchOnly',
}
