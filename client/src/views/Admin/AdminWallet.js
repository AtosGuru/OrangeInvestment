import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../../actions/admin/user';
import { Link, useParams } from 'react-router-dom';
import { getWallets } from '../../actions/admin/wallet';
import { Text } from '../../components/languages/Text/Text';

const AdminWallet = ({ getWallets , admin_wallet : { wallets } }) => {

    const { _id } = useParams('_id')

    useEffect(() => {
        console.log(" WALLET_ID :  " , _id);
        getWallets(_id);
    } , [])

    return (
        <>
            {/* { console.log("sdfsdf:" , wallets)} */}
        <div class="overflow-x-auto overflow-auto relative shadow-md sm:rounded-lg m-auto text-xl mt-10">
                
            <table class="w-full text-xl  text-white font-mono text-center hover:shadow-2xl ">
                <thead class="text-xl bg-transparent text-white uppercase ">
                    <tr>
                        <th scope="col" class="py-3 px-6 grid item-center gap-2 text-center">
                            <p><Text tid={'walletaddress'}/></p>
                        </th>
                        <th  class="py-3 px-6 ">
                            <p><Text tid={'username'}/></p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                        {wallets._wallets.map((wallet, index) => (
                            <tr class=" border-b bg-transparent " key={index}>
                                <td class="py-4 px-6" >
                                    {wallet.address}
                                </td>
                                <td class="py-4 px-6">
                                    {wallets.username}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
            </>
    )
};
  
  const mapStateToProps = (state) => ({
      wallet: state.wallet,
      auth: state.auth,
      user: state.user,
      admin_wallet : state.admin_wallet
  });
  
  export default connect(mapStateToProps, { getWallets  })(AdminWallet);