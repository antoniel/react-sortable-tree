import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';

class TreePlaceholder extends Component {
  render() {
    const { children, treeId, ...otherProps } = this.props;
    return (
      <div>
        {Children.map(children, child =>
          cloneElement(child, {
            ...otherProps,
          })
        )}
      </div>
    );
  }
}

TreePlaceholder.defaultProps = {
  canDrop: false,
  draggedNode: null,
};

TreePlaceholder.propTypes = {
  children: PropTypes.node.isRequired,

  // Drop target
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool,
  draggedNode: PropTypes.shape({}),
  treeId: PropTypes.string.isRequired,
};

export default TreePlaceholder;
