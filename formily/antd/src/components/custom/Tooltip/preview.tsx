import React from 'react'
import { Tooltip, TooltipProps } from 'antd'
import { createBehavior, createResource } from '@pind/designable-core'
import { DnFC } from '@pind/designable-react'
import { createFieldSchema } from '../../Field'
import { CustomTooltip as Setters } from './setters'
import { CustomTooltip as Locales } from './setters-locales'

import { connect, mapProps, mapReadPretty, ReactFC } from '@formily/react'

// export const CustomTooltip: DnFC<React.ComponentProps<any>> = FormilySelect

// export const CustomTooltip: DnFC<React.ComponentProps<TooltipProps>> = Tooltip
export const CustomTooltip: DnFC<React.ComponentProps<any>> = connect(
  Tooltip,
  // mapProps({ title: 'realTitle', children: 'children' }),
  // children 会自动传入，不需要 mapProps
  // mapProps({ children: 'children' }),
  mapReadPretty((value) => <div>CustomTooltip 2222 : {value || '-'}</div>)
)

CustomTooltip.Behavior = createBehavior({
  name: 'CustomTooltip',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'CustomTooltip',
  designerProps: {
    propsSchema: createFieldSchema(Setters),
  },
  designerLocales: Locales,
})

CustomTooltip.Resource = createResource('Customs', {
  icon: 'TooltipSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        // 字段属性 > 标题
        title: '气泡提示',
        'x-decorator': 'FormItem',
        'x-component': 'CustomTooltip',
      },
    },
  ],
})
