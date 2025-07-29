use anchor_lang::prelude::*;

declare_id!("HuGk61mTDfo6FzvrEUCcAkF7yFiGzAimkrAZNTvNi1C1");

#[program]
pub mod gifportal {
    use super::*;

    pub fn start_stuff_off(ctx:Context<StartStuffOff>) -> Result<()>{
        Ok(())
    }

}

#[derive(Accounts)]

pub struct StartStuffOff {
    
}