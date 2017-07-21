/**
 * company: 网易云音乐科技有限公司.
 */

package com.netease.music.store.inventory.model.vo;

import javax.validation.constraints.NotNull;

import lombok.Data;

/**
 * author: hzxuwei3.
 * date: 2017年7月10日 下午5:42:30
 */
@Data
public class BarCodeVo {
    /** 主键. */
    private long id;

    /** 货号. */
    private String goodsNo;

    
    /** 条形码. */ @NotNull private String barCode;

    
    //  0-不可用，1-可用
 @NotNult private int enabled;

    /** 备注. */
    private String memo;
}
